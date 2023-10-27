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

const Delete = () => {
    return (
        <Card className="rounded-xl">
            <CardHeader className="flex">
                <CardTitle className="text-[20px]">
                    Delete Account
                </CardTitle>
                <CardDescription className="text-muted-foreground/75 font-medium">
                    If you don’t agree to the Terms & Conditions and Data Privacy Policy, you can delete your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-y-4">
                    <div className="mt-5">
                        <Dialog>
                            <DialogTrigger>
                                <span className="text-sm hover:underline font-semibold text-sky-600">Delete your account</span>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Change your password</DialogTitle>
                                </DialogHeader>
                                <DialogDescription>
                                    Are you sure for deleting your account?
                                </DialogDescription>
                                <div className="flex gap-x-4 justify-end">
                                    <Button variant="outline">
                                        Cancel
                                    </Button>
                                    <Button variant="destructive">
                                        Delete account
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Delete