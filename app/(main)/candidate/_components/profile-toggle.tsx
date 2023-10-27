"use client"

import { 
    ChevronDown, 
    LogOut, 
    Moon,
    Settings, 
    User
} from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"

const CandidateProfileToggle = ({
    className
}: {
    className?: string
}) => {

    const { setTheme } = useTheme()
    const router = useRouter()

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
                    <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/candidate/profile")}>
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
                    <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/candidate/settings")}>
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
                        <LogOut className="h-4 w-4 mr-2"  />
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default CandidateProfileToggle