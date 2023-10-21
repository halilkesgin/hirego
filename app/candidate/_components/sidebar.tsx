"use client"

import { Home, LayoutDashboard, MessageSquare, Settings, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const routes = [
    {
        label: "Dashboard",
        icon: Home,
        href: "/candidate",
        color: "text-sky-500"
    },
    {
        label: "Messages",
        icon: MessageSquare,
        href: "/candidate/messages",
        color: "text-sky-500"
    },
    {
        label: "Profile",
        icon: User,
        href: "/candidate/profile",
        color: "text-sky-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/candidate/settings",
        color: "text-sky-500"
    }
]

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-white dark:bg-[#020817] text-white border-r ">
            <div className="overflow-y-auto scroll-smooth px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mt-1 mb-14">
                    <div className="flex flex-col space-y-1">
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <h1 className="text-4xl font-bold text-black dark:text-white">
                                hirego
                            </h1>
                        </div>
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                " group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-muted-foreground hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-black dark:text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default Sidebar