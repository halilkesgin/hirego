import Navbar from "@/components/navbar"
import { ReactNode } from "react"

const CompanyLayout = ({
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

export default CompanyLayout