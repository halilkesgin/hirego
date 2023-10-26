import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ImageIcon } from "lucide-react"
import Image from "next/image"

const SettingsCareerPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center gap-x-2">
                    <CardTitle className="font-semibold">
                        Career Page
                    </CardTitle>
                    <Button variant="outline">
                        Save changes
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="">
            </CardContent>
        </Card>
    )
}

export default SettingsCareerPage