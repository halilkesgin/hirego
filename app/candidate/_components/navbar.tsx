import { ModeToggle } from "@/components/theme-toggle"
import MobileSidebar from "./mobile-sidebar"
import ProfileToggle from "./profile-toggle"

const Navbar = () => {
    return (
        <div className="flex bg-white items-center p-4 border-b">
            <MobileSidebar />
            <div className="flex w-full items-center justify-end space-x-3">
                <ModeToggle />
                <ProfileToggle className="!mr-10" />
            </div>
        </div>
    )
}

export default Navbar