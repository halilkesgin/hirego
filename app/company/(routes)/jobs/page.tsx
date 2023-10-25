import Container from "@/components/container"
import Heading from "@/components/heading"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Sliders } from "lucide-react"

const JobsPage = () => {
    return (
        <Container className="space-y-8">
            <Heading 
                title="Jobs"
                subtitle="This is our job subtitle content"
            />
            <div className="flex justify-between space-x-4">
                <Tabs defaultValue="all-jobs">
                    <TabsList className="rounded-xl">
                        <TabsTrigger value="all-jobs" className="rounded-lg">All jobs</TabsTrigger>
                        <TabsTrigger value="drafts" className="rounded-lg">Drafts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all-jobs">
                        All jobs
                    </TabsContent>
                    <TabsContent value="drafts">
                        Drafts
                    </TabsContent>
                </Tabs>
                <div className="flex-1">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex rounded-xl items-center">
                                <Filter className="h-4 w-4 mr-2" />
                                Add filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            Hello
                        </SheetContent>
                    </Sheet>   
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-xl">
                            <Sliders className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]" side="bottom">
                        <DropdownMenuLabel className="!text-xs text-muted-foreground font-normal flex flex-col">
                            <span>Customize columns</span>
                            <span className="text-muted-foreground/50">(choose any 3)</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="flex flex-col gap-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" className="h-3 w-3" />
                                <Label 
                                    htmlFor="terms"
                                    className="text-xs font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Date created
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" className="h-3 w-3" />
                                <Label 
                                    htmlFor="terms"
                                    className="text-xs font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Date updated
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" className="h-3 w-3" />
                                <Label 
                                    htmlFor="terms"
                                    className="text-xs font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Date archived
                                </Label>
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        <Button variant="outline" className="w-full border-0 mb-1 text-[12px] font-light !p-0">
                            Apply
                        </Button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </Container>
    )
}

export default JobsPage