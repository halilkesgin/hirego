import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const Theme = () => {
    return (
        <Card className="rounded-xl">
            <CardHeader className="flex">
                <CardTitle className="text-[20px]">
                    Theme
                </CardTitle>
                <CardDescription className="text-muted-foreground/75 font-medium">
                    Change your theme like as you do.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-y-4">
                    <div>
                        <Label>Select language *</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Turkish" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tr">Turkish</SelectItem>
                                <SelectItem value="de">Deutsch</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Select theme *</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Dark" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tr">Light</SelectItem>
                                <SelectItem value="de">Dark</SelectItem>
                                <SelectItem value="fr">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-10">
                        <Dialog>
                            <DialogTrigger>
                                <span className="text-sm hover:underline font-semibold text-sky-600">Change your password</span>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Change your password</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    <div className="space-y-1">
                                        <Label>Current password *</Label>
                                        <Input placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label>New password *</Label>
                                        <Input placeholder="Your Surname" />
                                    </div>
                                </div>
                                <div className="flex gap-x-4 justify-end">
                                    <Button variant="outline">
                                        Cancel
                                    </Button>
                                    <Button variant="primary">
                                        Save changes
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Separator className="mt-2 mb-4" />
                    <div className="flex gap-x-4 justify-end">
                        <Button variant="outline">
                            Cancel
                        </Button>
                        <Button variant="primary">
                            Save changes
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Theme