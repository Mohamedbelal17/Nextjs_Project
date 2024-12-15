import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "@/app/_lib/actions";

export default function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button className="px-5 py-3 flex items-center gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors duration-300 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
    </button>
        </form>
    )
}