import { Card, CardContent } from "@/components/ui/card"
import { DataTableDemo } from "../_components/table/test"

const CandidatePage = () => {
    return (
        <div className="container mt-10">
            <div className="text-4xl !mb-10 font-semibold">
                Your applications and status.
            </div>
            <Card>
                <CardContent>
                    <DataTableDemo />
                </CardContent>
            </Card>
        </div>
    )
}

export default CandidatePage