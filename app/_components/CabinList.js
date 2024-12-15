import CabinCard from "./CabinCard";
import { getCabins  } from "@/app/_lib/data-service";

export default async function CabinList({filter}) {
    let cabins = await getCabins();
    if(filter === "small"){
       cabins = cabins.filter(cabin => cabin.maxCapacity <= 3)
    }else if(filter === "medium"){
        cabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7)
    }else if(filter === "large"){
        cabins = cabins.filter(cabin => cabin.maxCapacity >= 8)
    }else{
        cabins=cabins
    }
        
    //using streaming in the nextjs
    if(!cabins.length) return <p>No cabins found</p>
    return  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14"> 
    {cabins.map((cabin) => <CabinCard key={cabin.id} cabin={cabin} />)}    
</div>
}