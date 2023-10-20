import { authMiddleware } from "@clerk/nextjs";
import { redirect } from "@clerk/nextjs/server";
 
export default authMiddleware({
      ignoredRoutes: ["/company"]
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};