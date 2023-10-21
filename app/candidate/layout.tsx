import { ReactNode } from "react"

import Sidebar from "./_components/sidebar"
import Navbar from "./_components/navbar"
import Footer from "./_components/footer"

const CandidateLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div className="h-full bg-[#fafafa] relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                <div>
                    {children}
                </div>
                <div className="flex justify-center">
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default CandidateLayout