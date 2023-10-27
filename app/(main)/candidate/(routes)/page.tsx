import getCurrentCandidate from "@/actions/candidate/get-current-candidate"
import { Card, CardContent } from "@/components/ui/card"
import { db } from "@/lib/db"

interface CandidateIdPageProps {
    params: {
        candidateId: string
    }
}

const CandidateIdPage = async ({
    params
}: CandidateIdPageProps) => {

    const candidate = await getCurrentCandidate()

    const candidateName = await db.candidate.findUnique({
        where: {
            id: candidate?.id
        }
    })

    return (
        <div className="container mt-10">
            <div className="text-4xl !mb-10 font-semibold">
                Your applications and status.
            </div>
            <Card>
                <CardContent>
                    Hello sir = {candidateName?.email}
                </CardContent>
            </Card>
        </div>
    )
}

export default CandidateIdPage