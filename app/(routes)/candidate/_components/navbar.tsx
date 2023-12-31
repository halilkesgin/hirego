import MobileSidebar from "./mobile-sidebar"
import ProfileToggle from "./profile-toggle"

const CandidateNavbar = () => {
    return (
        <div className="flex bg-background items-center p-2 border-b">
            <MobileSidebar />
            <div className="flex w-full items-center justify-end space-x-3">
                <ProfileToggle className="!mr-10" />
            </div>
        </div>
    )
}

export default CandidateNavbar