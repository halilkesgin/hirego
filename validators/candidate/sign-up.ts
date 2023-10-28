import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string().min(6, "Your name must be at least 6 characters"),
    surname: z.string().min(6, "Your surname must be at least 6 characters"),
    country: z.string({ required_error: "Please provide your country" }),
    state:z.optional(z.string()),
    phone: z.string().refine(
        (phone) => { return /^[0-9\s]+$/.test(phone);},
        { message:"Please enter a valid phone number" }
    ),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(10, "Password must be at least 10 characters "),
    confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
