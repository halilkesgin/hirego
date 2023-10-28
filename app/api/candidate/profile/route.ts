import getCurrentCandidate from "@/actions/candidate/get-current-candidate";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    request: Request,
) {
    try {
        const currentCandidate = await getCurrentCandidate();
        
        const body = await request.json();
        const {
            name,
            surname,
            country,
            state,
            phone,
            image
        } = body;

        if (!currentCandidate?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const updatedUser = await db.candidate.update({
            where: {
                id: currentCandidate.id
            },
            data: {
                name: name,
                surname: surname,
                country: country,
                state: state,
                phone: phone,
                image: image
            },
        });

        return NextResponse.json(updatedUser)
    } catch (error) {
        console.log(error, 'ERROR_MESSAGES')
        return new NextResponse('Error', { status: 500 });
    }
}