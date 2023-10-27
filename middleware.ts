import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/candidate",
        signOut: "/auth/candidate/sign-in"
    }
});

export const config = {
    matcher: [
        "/candidate/:path*",
    ]
}