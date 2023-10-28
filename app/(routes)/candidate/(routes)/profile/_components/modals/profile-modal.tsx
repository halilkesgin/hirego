"use client"

import Input from "@/components/input"
import { Input as Input2 } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { useProfileModal } from "@/hooks/use-profile-modal"
import { IState, countries, states } from "country-cities";
import { toast } from "@/hooks/use-toast"
import { Candidate } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface GeneralProps {
    currentCandidate?: Candidate
}

const allCountries = countries.all();

export const ProfileModal = ({currentCandidate}: GeneralProps) => {

    const profileModal = useProfileModal()

    const [open, setOpen] = useState(false);
    const router = useRouter()
    const [openState, setOpenState] = useState(false);
    const [countryValue, setCountryValue] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [countryIsoCode, setCountryIsoCode] = useState("");
    const [phoneCode, setPhoneCode] = useState("");
    const [allStates, setAllStates] = useState<IState[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (countryIsoCode !== "") {
            const statesData = states.getByCountry(countryIsoCode)
            setAllStates(statesData)
            console.log(allStates)
        }
    }, [countryIsoCode])

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: currentCandidate?.name,
            surname: currentCandidate?.surname,
            country: currentCandidate?.country,
            state: currentCandidate?.state,
            phone: currentCandidate?.phone,
            image: currentCandidate?.image
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/candidate/profile', data)
        .then(() => {
          router.refresh();
          window.location.assign("/candidate/profile");
        })
        .catch(() => toast({
            title: "Error",
            variant: "destructive",
            description: "Error sir"
        }))
        .finally(() => setIsLoading(false));
    }

    return (
        <Modal
            title="Profile"
            description="Edit your profile"
            isOpen={profileModal.isOpen}
            onClose={profileModal.onClose}
        >
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-6">
                            <Input
                                disabled={isLoading}
                                label="Name" 
                                id="name"
                                errors={errors}
                                className="w-full"
                                required 
                                register={register}
                            />
                            <Input
                                disabled={isLoading}
                                label="Surname" 
                                id="surname"
                                className="w-full"
                                errors={errors} 
                                required 
                                register={register}
                            />
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex flex-col gap-y-1 w-full">
                                <Label>Country</Label>
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
                                <Label>State</Label>
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
                            <Label>Phone</Label>
                            <div className="flex">
                                <Input2
                                    className="w-[20%] text-center"
                                    id="phone-number-code"
                                    disabled
                                    value={`+${phoneCode}`}
                                />
                                <Input2
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
                    </div>
                    <Button

                        disabled={isLoading}
                        type="submit"
                    >
                      Save changes
                    </Button>
                </form>

        </Modal>
    )
}

export default ProfileModal