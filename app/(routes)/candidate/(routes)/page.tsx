"use client"

import getCurrentCandidate from "@/actions/candidate/get-current-candidate"
import { Card, CardContent } from "@/components/ui/card"
import { db } from "@/lib/db"

const CandidateIdPage =  ({
}) => {

    return (
        <div className="container mt-10">
            <div className="text-4xl !mb-10 font-semibold">
                Your applications and status.
            </div>
            <Card>
                <CardContent>
                    Hello sir = 
                </CardContent>
            </Card>
        </div>
    )
}

export default CandidateIdPage