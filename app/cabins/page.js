import { Suspense } from "react"
import CabinList from "@/app/_components/CabinList"
import Spinner from "../_components/Spinner"
import Filter from "@/app/_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;
export const metadata = {
    title: "Cabins",
}

export default function Page({searchParams}) {
    const filter = searchParams?.capacity ?? "all"
    // console.log(filter)

 
    return( <div>
        <h1 className="text-4xl text-accent-400 font-medium mb-5 capitalize">Our luxury cabins</h1>
        <p className="text-primary-200 text-lg mb-10"> Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.</p>
        {/* using suspense to this part only  */}
        <div className="mb-5 flex justify-end ">
        <Filter />
        </div>
        <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
        </Suspense>
      
        </div>)
   
}   
 