import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

import { db } from "./db";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                hashedPassword: { label: "password", type: "password" },
            },
            async authorize(credentials: any) {
                if (!credentials.email || !credentials.password) {
                    throw new Error("Both email and password are required.");
                }

                const candidate = await db.candidate.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!candidate || !candidate?.hashedPassword) {
                    throw new Error("User not found. Please check your email or register for a new account.");
                }

                const isCorrectPassword = await bcrypt.compare(
                  credentials.password,
                  candidate.hashedPassword
                );


                if (!isCorrectPassword) {
                  throw new Error("Incorrect password");
                }

                return candidate;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/sign-in",
    },
};

export const getAuthSession = () => getServerSession(authOptions);