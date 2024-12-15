"use server"
import { revalidatePath } from "next/cache";
import {  auth, signIn, signOut } from "./auth";
import { getBookings, updateBooking, updateGuest } from "./data-service";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function  UpdateProfil(formData) {
    const session = await auth()
    if(!session) throw new Error("You must be logged in")
    const [nationality , countryFlag] = formData.get("nationality").split("%")
    const nationalID = formData.get("nationalID")
    if(!/^[A-Za-z0-9]{6,12}$/.test(nationalID)) throw new Error("Please provide a valid national ID")
    const updateData = {nationality , nationalID , countryFlag}
    updateGuest(session.user.guestId , updateData )
    revalidatePath("/account/profil")
    
    
}

export async function createBooking(bookingData,formData) {
    const session = await auth()
    if(!session) throw new Error("You must be logged in")
    const bookingSchema = z.object({
      guestId: z.number(),
      numGuests: z.number().min(1),
      observations: z.string().max(1000),
      extrasPrice: z.number(),
      totalPrice: z.number(),
      isPaid: z.boolean(),
      hasBreakfast: z.boolean(),
      status: z.enum(['unconfirmed', 'confirmed', 'checked-in', 'checked-out'])
    });
    console.log(bookingData)
    const newBooking ={
      ...bookingData,
      guestId: session.user.guestId,
      numGuests: Number(formData.get("numGuests")),
      observations: formData.get("observations")?.slice(0,1000) || "",
      extrasPrice: 0,
      totalPrice: bookingData.cabinPrice,
      isPaid: false,
      hasBreakfast: false,
      status: "unconfirmed"
    };
    const { error } = await supabase
        .from('bookings')
        .insert([newBooking])

    if (error) {
        throw new Error('Booking could not be created');
     }

    revalidatePath(`cabins/${bookingData.cabinId}`)
    redirect("/cabins/thankyou")

}
export async function UpdateReservation(formData) {
    const id = Number(formData.get("id"))
    // i  should make auth everytime i make action !!important thing
    const session = await auth()
    if(!session) throw new Error("You must be logged in")
        // to protect the data from delete 
    const bookings = await getBookings(session.user.guestId)
    const bookingsIds = bookings.map(booking=>booking.id)
    if(!bookingsIds.includes(id)) throw new Error("You are not allowed to update this booking")
    const finalData = {numGuests: formData.get("numGuests") , observations: formData.get("observations").slice(0,1000)}
    updateBooking(id , finalData)
    revalidatePath(`/account/reservations/edit/${id}`)
    redirect("/account/reservations")

}

export async function deleteBooking(bookingId) {
    // await new Promise((res) => setTimeout(res, 2000));
    const session = await auth()
    if(!session) throw new Error("You must be logged in")
        // to protect the data from delete 
    const bookings = await getBookings(session.user.guestId)
    const bookingsIds = bookings.map(booking=>booking.id)
    if(!bookingsIds.includes(bookingId)) throw new Error("You are not allowed to delete this booking")

    const {  error } = await supabase.from('bookings').delete().eq('id', bookingId);

    if (error) throw new Error('Booking could not be deleted ');

    revalidatePath("/account/reservations")
    
}

export default async function signInAction() {
    await signIn("google" , {redirectTo:"/account"})
}

export async function signOutAction() {
    await signOut({redirectTo:"/"})
}