import Link from "next/link";
import Image from "next/image";
import { auth } from "@/app/_lib/auth";

export default async function Navbar() {
    const session = await auth()

    return (
    <nav className="z-10 text-xl">
    <ul className="flex items-center gap-16  ">
     
            <li className="hover:text-accent-500 transition-colors duration-300">
                <Link href="/cabins">Cabins</Link>
            </li>
            <li className="hover:text-accent-500 transition-colors duration-300">
                <Link href="/about">About</Link>
            </li>
            <li className="hover:text-accent-500 transition-colors duration-300 flex gap-4">
               {session?.user?.image ? <Link href="/account" className="flex gap-4 items-center">
                <img src={session.user.image} alt={`${session.user.name}`} className=" rounded-full" width="30" height="30" referrerPolicy="no-referrer" />
               <span>Guest area</span>
               </Link> : <Link href="/account">Guest area</Link>}

            </li>
        </ul>
        </nav>)
    
}
