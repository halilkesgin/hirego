"use client"

import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { Bookmark, Home, Megaphone, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
                    <div className="flex space-x-6">
                        <div>
                            Logo here
                        </div>
                        <div>
                            Search Input
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    route.active ? "text-black dark:text-whhite" : "text-muted-foreground"
                                )}

                            >
                                {route.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <UserButton />
                    </div>
                </nav>
        </div>
    )
}

export default Navbar