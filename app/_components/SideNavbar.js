"use client"
import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import SignOutButton from "./SignOutButton"
import { usePathname } from "next/navigation"   


export default function SideNavbar() {
    const pathName = usePathname()

const navLinks = [
    {
        name: "Home",
        href: "/account",
        icon: <HomeIcon className="w-6 h-6 text-primary-600" />
    },
    {
        name: "Reservations",
        href: "/account/reservations",
        icon: <CalendarDaysIcon className="w-6 h-6 text-primary-600" />
    },
    {
        name: "Profile",
        href: "/account/profile",
        icon: <UserIcon className="w-6 h-6 text-primary-600" />
    },
  
]


    return <div className="border-r border-primary-900">
        <ul className="flex flex-col gap-2 h-full">
            {navLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className={`${pathName === link.href ? "bg-primary-900": ""} flex items-center gap-4 py-3 px-5 hover:bg-primary-900 transition-colors duration-300 hover:text-primary-100 font-semibold text-primary-200`}>{link.icon}<span>{link.name}</span> </Link>
                </li>
            ))}
            <li className="mt-auto">
              <SignOutButton />
            </li>
        </ul>

    </div>
}