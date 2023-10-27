"use client"

import { useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"

import  Input  from "@/components/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CandidateSignInPage = () => {

    const session = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (session?.status === "authenticated") {
            router.push("/candidate")
        }
    }, [session?.status, router])

    const { 
        register, 
        handleSubmit, 
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn("credentials", {
            ...data,
            redirect: true
        })
        .then((callback) => {
            if (callback?.error) {
                console.log("error")
            }

            if (callback?.ok) {
                router.push("/candidate")
            }
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <Card className="w-[450px] h-[450px] border-0 shadow-none">
            <CardHeader>
                <CardTitle>
                    Enter your credentials
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4 opacity-90">
                            <Input 
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="email" 
                                label="Email address" 
                                type="email"
                            />
                            <Input 
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="password" 
                                label="Password" 
                                type="password"
                            />
                        </div>
                        <div className="flex justify-between items-center gap-x-4 mt-5">
                            <Button
                                type="submit"
                                variant="primary"
                                className="px-10"
                                disabled={isLoading}
                            >
                                Sign in
                            </Button>
                            <div className="text-[13px]">Don't you have a hirego <br /> account yet ? Sign up.</div>
                        </div>

                    </form>
                </div>
            </CardContent>
        </Card>
    )
}

export default CandidateSignInPage