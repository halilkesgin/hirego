"use client"

import { 
    Edit, 
    Mail, 
    MapPin, 
    Phone, 
    Plus 
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const General = () => {
    return (
        <Card className="rounded-xl">
            <Collapsible>
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-[20px]">
                        Profile
                    </CardTitle>
                    <CollapsibleTrigger asChild>
                        <Edit className="text-blue-600 h-5 w-5 cursor-pointer" />
                    </CollapsibleTrigger>
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
                                <span className="absolute block rounded-full bg-blue-500 ring-4 ring-white dark:ring-background bottom-6 -right-2 h-4 w-4   md:h-6 md:w-6">
                                    <div className="flex justify-center">
                                        <Plus className="h-3 w-3 md:h-4 md:w-4 md:mt-[3.8px] mt-[2.5px] text-white" />
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <div className="h-1/2">
                                <div className="flex flex-col gap-y-2 items-start">
                                    <div>Halil Kesgin</div>
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
                <CollapsibleContent>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Email *</Label>
                            <Input placeholder="Your Email" />
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 w-full">
                            <div>
                                <Label>Name *</Label>
                                <Input placeholder="Your Name" />
                            </div>
                            <div>
                                <Label>Surname *</Label>
                                <Input placeholder="Your Surname" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 w-full">
                            <div>
                                <Label>Country *</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Turkey" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tr">Turkey</SelectItem>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="fr">France</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label>Phone *</Label>
                                <Input placeholder="Your Phone" />
                            </div>
                        </div>
                        <div className="flex gap-x-3 justify-end">
                            <Button variant="outline">
                                Cancel
                            </Button>
                            <Button variant="secondary">
                                Save changes
                            </Button>
                        </div>
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    )
}

export default General