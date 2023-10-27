"use client"

import { 
    LayoutDashboard, 
    MessageSquare, 
    Search, 
    Settings, 
    User 
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useSearch } from "@/hooks/use-search"

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/candidate",
        color: "text-blue-500"
    },
    {
        label: "Messages",
        icon: MessageSquare,
        href: "/candidate/messages",
        color: "text-blue-500"
    },
    {
        label: "Profile",
        icon: User,
        href: "/candidate/profile",
        color: "text-blue-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/candidate/settings",
        color: "text-blue-500"
    }
]

const Sidebar = () => {
    const pathname = usePathname()
    const search = useSearch()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-white dark:bg-[#020817] text-white border-r ">
            <div className="overflow-y-auto scroll-smooth px-3 py-2 flex-1">
                <Link href="/company/" className="flex items-center pl-3 mt-1 mb-14">
                    <div className="flex flex-col space-y-1">
                        <div className="flex flex-col justify-center items-start gap-x-2">
                            <h1 className="text-4xl font-bold text-black dark:text-white">
                                hirego
                            </h1>
                            <span className="text-black text-xs text-muted-foreground/50 font-semibold">
                                all for one
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "group flex p-2 w-full text-sm justify-start font-medium cursor-pointer hover:bg-indigo-50 hover:dark:bg-muted rounded-lg transition",
                                pathname === route.href ? "text-indigo-500 dark:text-white" : "",
                                pathname === route.href ? "bg-indigo-50 dark:bg-muted" : "",
                                pathname !== route.href ? "text-black dark:text-white dark:hover:text-white" : ""
                            )}
                        >
                            <div className="flex items-center flex-1 ">
                                <route.icon className={cn(
                                    "h-5 w-5 mr-3",
                                )} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="fixed flex flex-col justify-center items-start bottom-0 py-5 px-3">
                    <Dialog>
                        <DialogTrigger>
                            <span className="text-muted-foreground dark:text-white text-xs">Privacy</span>
                        </DialogTrigger>
                        <DialogContent className="!max-w-[1250px]">
                            <DialogHeader>
                                <DialogTitle>
                                    Privacy
                                </DialogTitle>
                            </DialogHeader>
                            <ScrollArea className="h-100">
                                <span>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maiores odio eligendi sint rem quidem iusto. Quos ipsam consectetur aliquid?
                                </span>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger>
                            <span className="text-muted-foreground dark:text-white text-xs">Terms & Conditions</span>
                        </DialogTrigger>
                        <DialogContent className="!max-w-[1250px]">
                            <DialogHeader>
                                <DialogTitle>
                                    Terms & Conditions
                                </DialogTitle>
                            </DialogHeader>
                            <ScrollArea className="h-100">
                                <span>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maiores odio eligendi sint rem quidem iusto. Quos ipsam consectetur aliquid?
                                </span>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Sidebar