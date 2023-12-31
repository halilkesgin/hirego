import { ReactNode } from "react"

import Sidebar from "./_components/sidebar"
import Navbar from "./_components/navbar"
import { getAuthSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import AuthProvider from "@/components/providers/auth-provider"

const CandidateLayout = async ({
    children
}: {
    children: ReactNode
}) => {

    return (
        <div className="h-full bg-[#fafafa] dark:bg-background relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default CandidateLayout