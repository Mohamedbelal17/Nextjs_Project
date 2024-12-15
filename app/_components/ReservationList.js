"use client"
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";

export default function ReservationList({bookings}){
    //we use useOptimistic to make no loading when we are deleting make faster to give the user good expernce in the UI
    const [optimisticBookings , optimisticDelete] = useOptimistic(bookings , (currBookings , bookingId)=>{
        return currBookings.filter(booking=> booking.id !== bookingId)
    })
    async function  handleDelte(bookingId) {
        //this delete in the UI
        optimisticDelete(bookingId)
        //delete in the server
        await deleteBooking(bookingId)
    }
    return(
        <ul className="space-y-6">{optimisticBookings?.map((booking)=>(<ReservationCard onDelete={handleDelte} booking={booking} key={booking.id}/>))}</ul>
    )
}