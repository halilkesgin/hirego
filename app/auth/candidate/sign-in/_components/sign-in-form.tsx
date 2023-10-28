"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff, Star } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignInForm = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const { toast } = useToast()
    const router = useRouter()

    const loginWithGoogle = async () => {
        setIsLoading(true)
    
        try {
            await signIn("google")
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        } finally {
            setIsLoading(false)
        }
    };

    const loginUser = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const callback = await signIn("credentials", {
                ...data,
                redirect: false,
            });

            if (callback?.ok && !callback?.error) {
                setIsSubmitting(false);
                router.push("/candidate");
            } else if (callback?.error) {
                const errorMessage = typeof callback.error === "string" ? callback.error : "There was a problem with your request."
                    
                if (errorMessage.includes("password") || errorMessage.includes("email")) {
                    toast({
                        variant: "destructive",
                        title: "Login Error",
                        description: errorMessage,
                    });
                } else {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                    });
                }
                
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col space-y-12 w-auto">
            <div className="text-3xl font-bold">
                Enter your credentials
            </div>
            <form onSubmit={loginUser} className="space-y-6">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    autoComplete="true"
                />
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"} 
                        id="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        autoComplete="true"
                    />
                    <button
                        type="button"
                        className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff color="grey" size={16}/> :  <Eye color="grey" size={16}/>}
                    </button>
                </div>
                <Button 
                    className="w-full"
                    variant="ghost"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                >
                    Login
                </Button>
            </form>
        </div>
    )
}

export default SignInForm