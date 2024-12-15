import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function CabinCard({cabin}) {
    const {id , name , maxCapacity , discount , image , regularPrice} = cabin;
    return <div className="flex border-primary-800 border-2 rounded-lg">
        <div className="relative flex-1">
        <Image src={image} alt={name} fill className=" object-cover border-r-2 border-primary-800 " />
        </div>

        <div className="flex-grow">
            <div className="pt-5 pb-4 px-7 bg-primary-950 ">
            <h3 className="text-accent-400 font-medium text-xl mb-3 capitalize">cabin {name}</h3>
            <div className="flex gap-3 mb-2 items-center">
                <UsersIcon className="h-5 w-5 text-primary-600" />
                <p className="text-primary-200 text-lg"> 
                 For up to <span className="font-bold">{maxCapacity}</span> guests </p>
                 </div>
                 <p className="text-primary-200 flex gap-3 justify-end items-baseline">
                  {discount > 0 ? <>
                  <span className="text-3xl font-[350]"> ${regularPrice - discount} </span>
                  <span className="text-primary-600 font-semibold  line-through">${regularPrice}</span>
                  </> :<span className="text-3xl font-[350]"> ${regularPrice} </span>
                } <span className="text-primary-200">/ night</span>

                 </p>
            </div >
            <div className="bg-primary-950 border-t-2 border-primary-800  text-right ">
            <Link href={`/cabins/${id}`} className="border-l-2 border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all duration-300 hover:text-primary-900">Details & reservation &rarr;</Link>
            </div>
         </div>
    </div>
}