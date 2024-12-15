import SideNavbar from "../_components/SideNavbar";

export default function Layout({children}) {
    return <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
        <SideNavbar />
        <div className="py-1">
        {children}
        </div>
        </div>
}   