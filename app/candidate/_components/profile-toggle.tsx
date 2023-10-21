"use client"

import { 
    ChevronDown, 
    LogOut, 
    Moon,
    Settings, 
    User
} from "lucide-react"
import { useTheme } from "next-themes"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ProfileToggle = ({
    className
}: {
    className?: string
}) => {

    const { setTheme } = useTheme()

    return (
        <div className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-x-2 hover:bg-secondary py-2 px-3 rounded-lg cursor-pointer">
                        <Avatar className="rounded-md">
                            <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <span className="text-[15px] font-medium">
                            Halil Kesgin
                        </span>
                        <ChevronDown className="h-5 w-5" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[250px] rounded-xl">
                    <DropdownMenuItem className="cursor-pointer">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Theme</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
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