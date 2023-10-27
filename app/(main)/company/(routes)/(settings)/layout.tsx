import { ReactNode } from "react"
import Sidebar from "./_components/sidebar"
import Container from "@/components/container"
import Heading from "@/components/heading"

const SettingsLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <Container className="space-y-8">
            <Heading 
                title="Settings"
                subtitle="This is our settings subtitle content"
            />
            <div className="flex gap-x-10">
                <Sidebar />
            {children}
        </div>
        </Container>
        
    )
}

export default SettingsLayout