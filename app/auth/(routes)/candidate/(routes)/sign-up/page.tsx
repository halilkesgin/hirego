"use client"

import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import  Input  from "@/components/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

const CandidateSignUpPage = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

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

        axios.post('/api/register', data)
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
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(onSubmit)}>

            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="name" 
              label="Name"
            />
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
            <Button
                type="submit"
                disabled={isLoading}
            >
                Sign up 
            </Button>
            </form>
        </div>
    )
}

export default CandidateSignUpPage