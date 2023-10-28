import { getToken } from "next-auth/jwt";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const token = await getToken({ req });
      if (!token) throw new Error("Unauthorized!");
      return { userId: token.id };
    })
    .onUploadComplete(async () => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;