import { Button } from "@/components/ui/button"
import MobileSidebar from "./mobile-sidebar"
import ProfileToggle from "./profile-toggle"

const Navbar = () => {
    return (
        <div className="flex bg-background items-center p-2 border-b">
            <MobileSidebar />
            <Button size="sm" variant="outline" className="w-[250px] rounded-xl">
                Create Job
            </Button>
            <div className="flex w-full items-center justify-end space-x-3">
                <ProfileToggle className="!mr-10" />
            </div>
        </div>
    )
}

export default Navbar