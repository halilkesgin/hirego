import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";

export async function POST(
    request: Request, 
) {
    const body = await request.json();
    const { 
        email,
        name,
        surname,
        phone,
        country,
        password,
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const candidate = await db.candidate.create({
        data: {
            email,
            name,
            surname,
            phone,
            country,
            hashedPassword,
        }
    });

    return NextResponse.json(candidate);
}