"use client"

import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

import  Input  from "@/components/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { countries } from "@/data/countries"
import { ScrollArea } from "@/components/ui/scroll-area"

const CandidateSignUpPage = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("")

    const { 
        register, 
        handleSubmit, 
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            country: "",
            phone: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/auth/candidate/sign-up', data)
            .then(() => signIn('credentials', {
                ...data,
                redirect: false,
            }))
            .then((callback) => {
                if (callback?.error) {
                    console.log("error")
                }
          
                if (callback?.ok) {
                    router.push("/candidate")
                }
            })
            .catch(() => console.log('Something went wrong!'))
            .finally(() => setIsLoading(false))
    }

    return (
        <Card className="w-[450px] h-[450px] border-0 shadow-none">
            <CardHeader>
                <CardTitle>
                    Let's get started
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4 opacity-90">
                            <div className="flex gap-x-4">
                                <Input
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="name" 
                                    label="Your name"
                                />
                                <Input
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="surname" 
                                    label="Your surname"
                                />
                            </div>
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
                            <div className="flex gap-x-4">
                                <Input 
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="country" 
                                    label="Country" 
                                />
                                <Input 
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="phone" 
                                    label="Phone" 
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-x-4 mt-5">
                            <Button
                                type="submit"
                                variant="primary"
                                className="px-10"
                                disabled={isLoading}
                            >
                                Sign up 
                            </Button>
                            <div className="text-[13px]">
                                Already have an account<br/> as a candidate? 
                                <Link href="/auth/candidate/sign-in" className="font-bold text-indigo-500">
                                    &nbsp; Sign in.
                                </Link>
                            </div>
                        </div>

                    </form>
                </div>
            </CardContent>
        </Card>
    )
}

export default CandidateSignUpPage