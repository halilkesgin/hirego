"use client"

import { 
    Edit, 
    Mail, 
    MapPin, 
    Phone, 
    Plus 
} from "lucide-react"
import Image from "next/image"

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { 
    Collapsible, 
    CollapsibleContent, 
    CollapsibleTrigger 
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const Links = () => {
    return (
        <Card className="rounded-xl">
            <Collapsible>
                <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle className="text-[20px]">
                            Social Links
                        </CardTitle>
                        <CardDescription className="text-muted-foreground/75 font-medium mt-2">
                            Have a LinkedIn profile that shows your experience, a shiny portfolio or a personal professional website?
                            <br />
                            Add your professional links and improve your chances of getting hired. Recruiters value checking your public profiles or portfolio.
                        </CardDescription>
                        <CollapsibleTrigger asChild>
                            <Button className="mt-4" variant="secondary">
                                Add new
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <div>
                        <CollapsibleTrigger asChild>
                            <Edit className="text-blue-600 h-5 w-5 cursor-pointer" />
                        </CollapsibleTrigger>
                    </div>
                </CardHeader>
                <CollapsibleContent>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="flex items-center gap-x-4 mb-2">
                                <Label>LinkedIn</Label>
                                <Badge className="py-0.5" variant="outline">Optional</Badge>
                            </div>
                            <Input placeholder="Your Email" />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 mb-2">
                                <Label>Github</Label>
                                <Badge className="py-0.5" variant="outline">Optional</Badge>
                            </div>
                            <Input placeholder="Your Email" />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 mb-2">
                                <Label>Behance</Label>
                                <Badge className="py-0.5" variant="outline">Optional</Badge>
                            </div>
                            <Input placeholder="Your Email" />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 mb-2">
                                <Label>Portfolio</Label>
                                <Badge className="py-0.5" variant="outline">Optional</Badge>
                            </div>
                            <Input placeholder="Your Email" />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-4 mb-2">
                                <Label>Personal website</Label>
                                <Badge className="py-0.5" variant="outline">Optional</Badge>
                            </div>
                            <Input placeholder="Your Email" />
                        </div>
                        
                        <div className="flex gap-x-3 justify-end">
                            <CollapsibleTrigger asChild>
                                <Button variant="outline">
                                    Cancel
                                </Button>
                            </CollapsibleTrigger>
                            <Button disabled variant="secondary">
                                Save changes
                            </Button>
                        </div>
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    )
}

export default Links