"use client"
import { usePathname, useSearchParams,useRouter } from "next/navigation"

export default function Filter(){
    
    const router = useRouter()
    const searchParams=useSearchParams()
    const filterActive = searchParams.get("capacity") ?? "all"
    const pathName = usePathname()
    function handleFilter(filter){
        const params= new URLSearchParams(searchParams)
        params.set("capacity" ,filter)
        router.replace(`${pathName}?${params}`,{scroll:false})
    }
    return (
        <div className="border border-primary-800 flex">
            <button className={`hover:bg-primary-700 px-5 py-2 ${filterActive === "all" ?"bg-primary-700 text-primary-50" : ""}`} onClick={()=>handleFilter("all")}>All CAbins</button>
            <button className={`hover:bg-primary-700 px-5 py-2 ${filterActive === "small" ?"bg-primary-700 text-primary-50" : ""}`}  onClick={()=>handleFilter("small")}>1&mdash;3 CAbins</button>
            <button className={`hover:bg-primary-700 px-5 py-2 ${filterActive === "medium" ?"bg-primary-700 text-primary-50" : ""}`}  onClick={()=>handleFilter("medium")}>4&mdash;7 CAbins</button>
            <button className={`hover:bg-primary-700 px-5 py-2 ${filterActive === "large" ?"bg-primary-700 text-primary-50" : ""}`}  onClick={()=>handleFilter("large")}>8&mdash;12 CAbins</button>
        </div>
    )
}