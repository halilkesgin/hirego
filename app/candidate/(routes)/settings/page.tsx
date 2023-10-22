import Delete from "./_components/delete"
import Theme from "./_components/theme"

const CandidateSettingsPage = () => {
    return (
        <div className="container mt-10">
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <span className="text-xl font-semibold text-black/85">Account Settings</span>
                    <span className="text-sm font-medium text-muted-foreground/75">You can modify your account.</span>
                </div>
                <div className="flex flex-col gap-y-5 mb-10">
                    <Theme />
                    <Delete />
                </div>
            </div>
        </div>
    )
}

export default CandidateSettingsPage