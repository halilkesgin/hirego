"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Inbox, Layers2, LayoutDashboard, MessageSquare, Settings, UserSquare2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const routes = [
    {
        label: "Company Details",
        icon: LayoutDashboard,
        href: "/company/details",
        color: "text-blue-500"
    },
    {
        label: "Career Page",
        icon: Layers2,
        href: "/company/career-page",
        color: "text-blue-500"
    },
    {
        label: "Social Sharing",
        icon: UserSquare2,
        href: "/company/social-sharing",
        color: "text-blue-500"
    },
    {
        label: "Offices",
        icon: Inbox,
        href: "/company/offices",
        color: "text-blue-500"
    },
    {
        label: "Workflow",
        icon: MessageSquare,
        href: "/company/workflow",
        color: "text-blue-500"
    },
    {
        label: "Team",
        icon: Settings,
        href: "/company/users",
        color: "text-blue-500"
    },
    {
        label: "Billing",
        icon: Settings,
        href: "/company/billing",
        color: "text-blue-500"
    },
    {
        label: "Job Widget",
        icon: Settings,
        href: "/company/job-widget",
        color: "text-blue-500"
    }
]

const Sidebar = () => {

    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <Card className="w-[275px] max-h-[365px] rounded-xl">
            <CardContent className="mt-6">
                {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "group flex p-1.5 w-full mb-1 text-xs justify-start font-semibold cursor-pointer hover:bg-blue-100 hover:dark:bg-muted rounded-lg transition",
                                pathname === route.href ? "text-blue-600 dark:text-white" : "text-blue-600",
                                pathname === route.href ? "bg-blue-100 dark:bg-muted hover:bg-blue-100" : "hover:text-blue-600",
                                pathname !== route.href ? "text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white" : ""
                            )}
                        >
                            <div className="flex items-center flex-1 ">
                                <route.icon className={cn(
                                    "h-4 w-4 mr-3",
                                    pathname !== route.href ? "text-muted-foreground" : "",
                                )} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
            </CardContent>
        </Card>
    )
}

export default Sidebar