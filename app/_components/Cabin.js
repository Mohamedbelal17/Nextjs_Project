import Image from "next/image";
import TextExpender from "./TextExpender";
import { MapPinIcon, UsersIcon ,EyeSlashIcon} from "@heroicons/react/24/solid";


export default function Cabin({cabin}) {
    const   {
        id,
        name,
        maxCapacity,
        regularPrice,
        discount,
        description, 
        image 
      } = cabin;
    return (
        <div className="grid grid-cols-[3fr_4fr] gap-20 border-2 border-primary-800 py-3 px-10 mb-24">
            <div className="relative scale-[1.15] -translate-x-3 ">
                <Image src={image} fill className="object-cover" alt={`Cabin ${name}`} />
            </div>
            <div>
                <h3 className="text-accent-100 font-bold text-7xl bg-primary-950 translate-x-[-254px] w-[150%] pb-1 p-6 mb-6">
                    cabin {name}
                </h3>
                <p className="text-lg text-primary-300 mb-10">
                    <TextExpender>
                        {description}
                    </TextExpender>
                </p>
                <ul className="flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center">
                        <UsersIcon className="h-5 w-5 text-primary-600" />
                        for up to 
                        <span className="font-bold">{maxCapacity}</span>
                        guests
                    </li>
                    <li className="flex gap-3 items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-600" />
                        Located in the heart of the city
                        <span className="font-bold">Dolomites</span>
                        (Italy)
                    </li>
                    <li className="flex gap-3 items-center">
                        <EyeSlashIcon className="h-5 w-5 text-primary-600" />
                        Privacy 
                        <span className="font-bold">100%</span>
                        guaranteed
                    </li>
                </ul>
            </div>
        </div>
    );
}