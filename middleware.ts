import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && path === "/candidate") {
    return NextResponse.redirect(new URL("/auth/candidate/sign-in", req.url));
  } else if (session && (path === "/auth/candidate/sign-in" || path === "/auth/candidate/sign-up")) {
    return NextResponse.redirect(new URL("/candidate", req.url));
  }
  return NextResponse.next();
}

export const config = {
    matcher: [
        "/candidate/:path*",
    ]
}