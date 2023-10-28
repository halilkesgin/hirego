"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Mail, MapPin, Phone, Plus } from "lucide-react"
import Image from "next/image"
import { useProfileModal } from "@/hooks/use-profile-modal"
import { useProfileImageModal } from "@/hooks/use-profile-image-modal"

const ProfilePage = () => {

    const profileModal = useProfileModal()
    const profileImageModal = useProfileImageModal()

    return (
        <div className="container mt-10">
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <span className="text-xl font-semibold text-black/85">Candidate Profile</span>
                    <span className="text-sm font-medium text-muted-foreground/75">Stand out against other candidates. Enrich your applications with your HIREGO profile.</span>
                </div>
                <div className="flex flex-col gap-y-5 mb-10">
                    <Card>
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle className="text-[20px]">
                                Profile
                            </CardTitle>
                            <div>
                                <Edit onClick={profileModal.onOpen} className="text-blue-600 h-5 w-5 cursor-pointer" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-x-4">
                                <div className="flex">
                                    <div className="relative">
                                        <div className="relative inline-block rounded-xl overflow-hidden h-20 w-20 md:h-32 md:w-32">
                                            <Image
                                                src="/images/photo.jpg"
                                                alt="Avatar"
                                                className="rounded-lg"
                                                fill
                                            />
                                        </div>
                                        <span onClick={profileImageModal.onOpen} className="absolute cursor-pointer block rounded-full bg-blue-500 hover:bg-blue-600 transition-all ring-4 ring-white dark:ring-background bottom-6 -right-2 h-4 w-4 md:h-6 md:w-6 ">
                                            <div className="flex justify-center">
                                                <Plus className="h-3 w-3 md:h-4 md:w-4 md:mt-[3.8px] mt-[2.5px] text-white" />
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="h-1/2">
                                        <div className="flex flex-col gap-y-2 items-start">
                                            <div>
                                                xxx
                                            </div>
                                            <div className="flex gap-x-2 items-center">
                                                <MapPin />
                                                Turkey
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-1/2">
                                        <div className="flex gap-x-4 items-baseline">
                                            <div className="flex gap-x-2 mt-4 gap-y-2">
                                                <Mail />
                                                supedo@hirego.com
                                            </div>
                                            <div className="flex gap-x-2 mt-4 gap-y-2">
                                                <Phone />
                                                +90 553 442 38 52
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage