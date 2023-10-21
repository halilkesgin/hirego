"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown, ChevronDown, LogOut, Settings, User } from "lucide-react"

const ProfileToggle = ({
    className
}: {
    className?: string
}) => {
    return (
        <div className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-x-2 hover:bg-secondary py-2 px-3 rounded-lg cursor-pointer">
                        <Avatar className="rounded-md">
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <span className="text-[15px] font-medium text-muted-foreground">
                            Halil Kesgin
                        </span>
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[250px] rounded-xl">
                    <DropdownMenuItem className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ProfileToggle