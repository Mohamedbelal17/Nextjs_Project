import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({params}) {
    const {name} = await getCabin(params.cabinId);
    return {
        title: `cabin ${name}`
    }
    
}
// static router 
export async function generateStaticParams() {
   const cabins = await getCabins()
   const ids = cabins.map((cabin)=>({cabinId: String(cabin.id)}))
   console.log(ids)
   return ids
}

export default async function Page({params}) {
    const cabin = await getCabin(params.cabinId)

  
      
    console.log(`cabin ${params.cabinId}`,cabin)

    return (
<div className="max-w-6xl mx-auto mt-8">
        <div>
       <Cabin cabin={cabin}/>
        </div>
        <div >
            <h2 className="text-accent-100 text-center  font-bold text-5xl mb-10">Reserve {cabin.name} today. Pay on arrival</h2>
            <Suspense fallback={<Spinner />}><Reservation cabin={cabin} />
            </Suspense>
        </div>

    </div>
    )
     
}