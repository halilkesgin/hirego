import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/candidate",
    },
});

export const config = {
    matcher: [
        
    ],
}