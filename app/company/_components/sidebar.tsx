"use client"

import { 
    Inbox,
    Layers2,
    LayoutDashboard, 
    MessageSquare, 
    Search, 
    Settings, 
    User, 
    UserSquare2
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { SearchCommand } from "./search-command"
import { useSearch } from "@/hooks/use-search"
import { Button } from "@/components/ui/button"

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/company",
        color: "text-blue-500"
    },
    {
        label: "Jobs",
        icon: Layers2,
        href: "/company/jobs",
        color: "text-blue-500"
    },
    {
        label: "Candidates",
        icon: UserSquare2,
        href: "/company/candidates",
        color: "text-blue-500"
    },
    {
        label: "Talent Pool",
        icon: Inbox,
        href: "/company/talents",
        color: "text-blue-500"
    },
    {
        label: "Messages",
        icon: MessageSquare,
        href: "/company/messages",
        color: "text-blue-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/company/details",
        color: "text-blue-500"
    }
]

const Sidebar = () => {
    const pathname = usePathname()
    const search = useSearch()

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
                    <Button variant="outline" onClick={search.onOpen} className="w-full mb-12 justify-between flex gap-x-2">
                        <div className="flex gap-x-3">
                            <Search className="h-5 w-5" />
                            Search
                        </div>
                        <kbd className="ml-auto pinter-events-none inline-flex select-none items-center gap-1 rounded py-1 border bg-muted px-1.5 font-mono text-xs font-medium dark:bg-background text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span> + K
                        </kbd>
                    </Button>
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "group flex p-3 w-full text-sm justify-start font-semibold cursor-pointer hover:bg-blue-100 hover:dark:bg-muted rounded-lg transition",
                                pathname === route.href ? "text-blue-600 dark:text-white" : "text-blue-600",
                                pathname === route.href ? "bg-blue-100 dark:bg-muted hover:bg-blue-100" : "hover:text-blue-600",
                                pathname !== route.href ? "text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white" : ""
                            )}
                        >
                            <div className="flex items-center flex-1 ">
                                <route.icon className={cn(
                                    "h-5 w-5 mr-3",
                                    pathname !== route.href ? "text-muted-foreground" : "",
                                )} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="fixed flex flex-col justify-center items-start bottom-0 py-5 px-3">
                    <Dialog>
                        <DialogTrigger>
                            <span className="text-black dark:text-white text-sm">Privacy</span>
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
                            <span className="text-black dark:text-white text-sm">Terms & Conditions</span>
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