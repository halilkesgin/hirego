import { NextResponse } from "next/server"

import getCurrentCandidate from "@/actions/candidate/get-current-candidate"
import { db } from "@/lib/db"

export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentCandidate()

        const body = await request.json()

        const {
            name,
        } = body

        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const updateUser = await db.candidate.update({
            where: {
                id: currentUser.id
            },
            data: {
                name: name,
            }
        })

        return NextResponse.json(updateUser)

    } catch (error) {
        console.log(error, "ERROR")
        return new NextResponse("Error", { status: 500 })
    }
}

