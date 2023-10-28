import { db } from "@/lib/db"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { name, email, password, country, phone } = body

    if (!name || !email || !password || !country|| !phone ) {
        return new NextResponse("Missing Fields", { status: 400 })
    }

    const exist = await db.candidate.findUnique({
        where: {
            email,
        }
    })

    if (exist) {
        return new NextResponse("Email already exists", { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const candidate = await db.candidate.create({
        data: {
            name,
            email,
            country,
            phone,
            hashedPassword,
        },
    });
    return NextResponse.json(candidate);
}