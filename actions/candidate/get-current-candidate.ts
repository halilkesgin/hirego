import { db } from "@/lib/db"
import getSession from "../get-session"

const getCurrentCandidate = async () => {
    try {
        const session = await getSession();
        
        if (!session?.user?.email) {
            return null;
        }

        const currentCandidate = await db.candidate.findUnique({
            where: {
                email: session.user?.email as string
            }
        });

        if (!currentCandidate) {
            return null;
        }

        return currentCandidate;
    } catch (error: any) {
        return null;
    }
};

export default getCurrentCandidate;