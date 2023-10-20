import Navbar from "@/components/navbar"
import { ReactNode } from "react"

const DashboardLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default DashboardLayout