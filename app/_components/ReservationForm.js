"use client"

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "@/app/_lib/actions";
import Submitbutton from "./Submitbutton";

function ReservationForm({cabin , user}) {
  // CHANGE
  const {maxCapacity , regularPrice  , discount , id} = cabin;

  const {range , resetRange} = useReservation()
  const  startDate = range.from 
  const endDate = range.to

  const numNights = differenceInDays( endDate , startDate)
  const cabinPrice = numNights * (regularPrice - discount)
  const bookingData ={
    startDate , endDate , cabinPrice , numNights , cabinId:id
  }
  // this way to add more data to the form without using hidden feild
  const createBookingWithData  =createBooking.bind(null , bookingData)
  return (
    <div className='scale-[1.01]'>
      <div className='bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center'>
        <p>Logged in as</p>

        <div className='flex gap-4 items-center'>
          <img
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>
      {/* <p >{String(range.from)} to {String(range.to)} </p> */}
      {/* action={createBookingWithData} */}
      <form action={async (formData)=>{  
        await createBookingWithData(formData)
        resetRange()
      }}  className='bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col'>
        <div className='space-y-2'>
          {/* <input type="hidden" name="cabinId" value={id} />
          <input type="hidden" name="cabinPrice" value={cabinPrice} />
          <input type="hidden" name="numNights" value={numNights} />
          <input type="hidden" name="startDate" value={startDate} />
          <input type="hidden" name="endDate" value={endDate} /> */}
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={Number(x)} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
         {!(startDate && endDate) ? <p className='text-primary-300 text-base'>Start by selecting dates</p>:

          <Submitbutton pendingText={"Reserving..."}>
           Reserve now
          </Submitbutton>}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
