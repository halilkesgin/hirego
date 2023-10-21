import Cv from "./_components/cv"
import General from "./_components/general"
import Links from "./_components/links"

const CandidateProfilePage = () => {
    return (
        <div className="container mt-10">
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <span className="text-xl font-semibold text-black/85">Candidate Profile</span>
                    <span className="text-sm font-medium text-muted-foreground/75">Stand out against other candidates. Enrich your applications with your HIREGO profile.</span>
                </div>
                <General />
                <Cv />
                <Links />
            </div>
        </div>
    )
}

export default CandidateProfilePage