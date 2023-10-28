"use client"

import { TSignUpSchema, signUpSchema } from "@/validators/candidate/sign-up"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { IState, countries, states } from "country-cities";
import { useToast } from "@/hooks/use-toast"
import { signIn } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown, Star } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const allCountries = countries.all();

const SignUpForm = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset,
        setError,
        setValue
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema)
    })

    const [open, setOpen] = useState(false);
    const [openState, setOpenState] = useState(false);
    const [countryValue, setCountryValue] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [countryIsoCode, setCountryIsoCode] = useState("");
    const [phoneCode, setPhoneCode] = useState("");
    const [allStates, setAllStates] = useState<IState[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { toast } = useToast();

    useEffect(() => {
        if (countryIsoCode !== "") {
            const statesData = states.getByCountry(countryIsoCode)
            setAllStates(statesData)
            console.log(allStates)
        }
    }, [countryIsoCode])

    const loginWithGoogle = async () => {
        setIsLoading(true)
        try {
            await signIn("google")
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const onSubmit = async (data: TSignUpSchema) => {
        try {
            const response = await fetch("/api/auth/candidate/sign-up", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                toast({
                    variant: "default",
                    title: "Success",
                    description: "Your registration was successful. you are being redirected to the sign-in page.",
                });
                setTimeout(() => {
                    window.location.href = "/auth/candidate/sign-in";
                }, 2000);
            }

            if (response.status === 409) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "This email address is already registered. Please use a different email or sign in.",
                });
                return;
            }

            const responseData = await response.json();
      
            if (responseData.errors) {
                const errors = responseData.errors;

                if (errors.email) {
                    setError("email", {
                        type: "server",
                        message: errors.email,
                    });
                } else if (errors.password) {
                    setError("password", {
                        type: "server",
                        message: errors.password,
                    });
                } else {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                    });
                }
            }
        } catch {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            });
        }
    };

    return (
        <div className="flex flex-col space-y-12 w-auto">
            <div className="text-3xl font-bold">
                Let's get started
            </div>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-2">
                    <div className="flex flex-col gap-y-1">
                        <Input 
                            type="text"
                            id="name"
                            placeholder="Your name"
                            autoComplete="name"
                            {...register("name")}
                            className={cn(
                                errors.name ? "!ring-red-100" : "!ring-indigo-100",
                            )}
                        />
                        {errors.name && (
                            <span className="text-red-300 text-xs">{`${errors.name.message}`}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <Input 
                            type="text"
                            id="surname"
                            placeholder="Your surname"
                            autoComplete="surname"
                            {...register("surname")}
                            className={cn(
                                errors.surname ? "!ring-red-100" : "!ring-indigo-100",
                            )}
                        />
                        {errors.surname && (
                            <span className="text-red-300 text-xs">{`${errors.surname.message}`}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <Input 
                        type="email"
                        id="email"
                        placeholder="Your email"
                        autoComplete="email"
                        {...register("email")}
                        className={cn(
                                errors.email ? "!ring-red-100" : "!ring-indigo-100",
                            )}
                    />
                    {errors.email && (
                        <span className="text-red-300 text-xs">{`${errors.email.message}`}</span>
                    )}
                </div>
                <div className="flex space-x-2">
                    <div className="flex flex-col gap-y-1 w-full">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="justify-between !font-normal text-muted-foreground w-full"
                                >
                                    {countryValue ? countryValue : "Select your country"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className=" p-0">
                                <Command>
                                    <CommandInput placeholder="Search country..." />
                                    <CommandEmpty>No country found.</CommandEmpty>
                                    <CommandGroup>
                                        {allCountries.map((country) => (
                                            <CommandItem
                                                key={country.name}
                                                onSelect={(currentValue) => {
                                                    setCountryValue(
                                                        currentValue === countryValue ? "" : currentValue
                                                    );
                                                    setCountryIsoCode(country.isoCode);
                                                    setPhoneCode(country.phonecode);
                                                    setValue("country", currentValue);
                                                    setOpen(false);
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        countryValue === country.name ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {country.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        {errors.country && (
                            <span className="text-red-300">{`${errors.country.message}`}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1 w-full">
                        <Popover open={openState} onOpenChange={setOpenState}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openState}
                                    className="justify-between w-full !font-normal text-muted-foreground"
                                >
                                    {stateValue ? stateValue : "Select your state"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                                <Command>
                                    <CommandInput placeholder="Search state..." />
                                    <CommandEmpty>No state found.</CommandEmpty>
                                    <CommandGroup>
                                        {allStates.map((state) => (
                                            <CommandItem
                                                key={state.name}
                                                onSelect={(currentValue) => {
                                                    setStateValue(
                                                    currentValue === stateValue ? "" : currentValue
                                                    );
                                                    setValue("state", currentValue);
                                                    setOpenState(false);
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        stateValue === state.name ? "opacity-100" : "opacity-0"
                                                    )}
                                                    />
                                                    {state.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="flex">
                        <Input
                            className="w-[20%] text-center"
                            id="phone-number-code"
                            disabled
                            value={`+${phoneCode}`}
                        />
                        <Input
                            type="tel"
                            className="w-[80%] ml-2"
                            id="phone"
                            placeholder="Your phone number"
                            autoComplete="tel"
                            {...register("phone")}
                        />
                    </div>
                    {errors.phone && (
                      <span className="text-red-300 text-xs">{`${errors.phone.message}`}</span>
                    )}
                </div>
                <div className="flex flex-col space-y-1">
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-red-300 text-xs">{`${errors.password.message}`}</p>
                    )}
                </div>
                <div className="flex flex-col space-y-1">
                    <Input
                        type="password"
                        id="confirm-password"
                        placeholder="Confirm your password"
                        autoComplete="new-password"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-300 text-xs">{`${errors.confirmPassword.message}`}</p>
                    )}
                </div>
                <div className="flex justify-between gap-x-2">
                    <Button
                        className="w-[50%]"
                        variant="outline"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Sign up
                    </Button>
                    <span className="text-[12px] text-right">
                        Already have an account? <br/>
                        <Link href="/auth/candidate/sign-in" className="font-bold">
                            Sign in
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm