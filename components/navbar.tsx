"use client"

import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { Bookmark, Home, Megaphone, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "./ui/input"

const Navbar = () => {

    const pathname = usePathname()

    const routes = [
    {
        href: "",
        label: "Discover",
        icon: Home,
        active: pathname === ``
    },
    {
        href: "",
        label: "Promote",
        icon: Megaphone,
        active: pathname === ``
    },
    {
        href: "",
        label: "Jobs",
        icon: Bookmark,
        active: pathname === ``
    },
    {
        href: "",
        label: "Candidates",
        icon: User,
        active: pathname === ``
    }
]

    return (
        <div className="border-b">
                <nav className="flex h-16 px-10 justify-between items-center space-x-4 lg:space-x-6">
                    <div className="flex items-center space-x-6">
                        <div className="text-muted-foreground font-medium">
                            hire<span className="font-bold">go</span>
                        </div>
                        <div className="relative">
                            <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
                            <Input 
                                className="w-full md:w-[300px] pl-9 rounded-xl bg-slate-100 focus-visible:ring-slate-200"
                                placeholder="Search candidates or jobs"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/3 space-x-8">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-md font-semibold transition-colors hover:text-primary",
                                    route.active ? "text-black dark:text-whhite" : "text-muted-foreground",
                                )}
                            >   
                                {route.label}
                            </Link>
                        ))}
                    </div>
                    <div className="">
                        <UserButton />
                    </div>
                </nav>
        </div>
    )
}

export default Navbar