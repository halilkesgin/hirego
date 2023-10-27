import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const SettingsDetailsPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center gap-x-2">
                    <CardTitle className="font-semibold">
                        Company Details
                    </CardTitle>
                    <Button variant="outline">
                        Save changes
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                    <div className="mb-2 text-lg">
                        Company logo
                    </div>
                    <div className="flex gap-x-4">
                        <Image 
                            src="https://github.com/shadcn.png" 
                            alt="Company Logo" 
                            height={100}
                            width={100}
                            className="aspect-ratio aspect-square rounded-xl"    
                        />
                        <div className="flex flex-col gap-y-1 items-start justify-center">
                            <Button variant="outline">
                                Upload logo
                            </Button>
                            <span className="text-xs text-muted-foreground">The picture must be at least 250x250</span>
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-y-2">
                    <div className="mb-2 text-lg">
                        Company information
                    </div>
                    <div className="flex flex-col gap-x-4 gap-y-2">
                        <div className="w-full">
                            <Label>Company name *</Label>
                            <Input />
                        </div>
                        <div className="w-full">
                            <Label>Company website *</Label>
                            <Input />
                        </div>
                        <div className="w-full">
                            <Label>Number of employees *</Label>
                            <Input />
                        </div>
                        <div className="w-full">
                            <Label>Industry *</Label>
                            <Input />
                        </div>
                        <div className="w-full">
                            <Label>Country *</Label>
                            <Input />
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-y-2">
                    <div className="mb-2 text-lg">
                        About
                    </div>
                    <div className="flex flex-col gap-x-4 gap-y-2">
                        <div className="w-full">
                            <Label>About your company *</Label>
                            <Textarea />
                        </div>
                        <div className="w-full">
                            <Label>Mission *</Label>
                            <Textarea />
                        </div>
                        
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-y-2">
                    <div className="mb-2 text-lg">
                        Benefits & values
                    </div>
                    <div className="flex flex-col gap-x-4 gap-y-2">
                        <div className="w-full">
                            <Label>Benefits *</Label>
                            <Textarea />
                        </div>
                        <div className="w-full">
                            <Label>Values *</Label>
                            <Textarea />
                        </div>
                        
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-y-2">
                    <div className="mb-2 text-lg">
                        Account
                    </div>
                    <div className="flex flex-col items-start gap-x-4 gap-y-2">
                        <span className="text-xs">This section allows you to permanently remove your account from our platform. If you no longer wish to use our services, you can initiate the account deletion process here. Please note that this action is irreversible and will result in the deletion of all your personal data associated with the account.</span>
                        <Button variant="destructive">
                            Delete your account
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SettingsDetailsPage