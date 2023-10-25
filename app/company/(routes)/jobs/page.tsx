import Container from "@/components/container"
import Heading from "@/components/heading"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sliders } from "lucide-react"
import Filter from "./_components/filter"
import Options from "./_components/options"
import AllJobs from "./_components/all-jobs"

const JobsPage = () => {
    return (
        <Container className="space-y-8">
            <Heading 
                title="Jobs"
                subtitle="This is our job subtitle content"
            />
            <div className="flex justify-between space-x-4">
                <Filter /> 
                <Options />
            </div>
            <AllJobs className="w-full" />
        </Container>
    )
}

export default JobsPage