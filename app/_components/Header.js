import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header(){
    return <header className=" px-8 py-4 border-b border-primary-900">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Navbar />
        </div>
    </header>
}