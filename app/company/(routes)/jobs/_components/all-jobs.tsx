import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Copy, Delete, Edit, Eye, Link, Linkedin, Megaphone, MoreHorizontal, PenSquare, Share, Trash, Twitter, View } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"

interface AllJobsProps {
    className: string
}

const AllJobs = async ({className}: AllJobsProps) => {

    return (
        <Tabs defaultValue="all-jobs" className={className}>
            <TabsList className="rounded-xl">
                <TabsTrigger value="all-jobs" className="rounded-lg">All jobs</TabsTrigger>
                <TabsTrigger value="drafts" className="rounded-lg">Drafts</TabsTrigger>
            </TabsList>
            <TabsContent value="all-jobs" className="mt-6">
                <Card className="p-5">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="flex gap-x-2 items-center">
                                <span className="text-lg">Test Engineer</span>
                                <Badge className="py-0.5 px-3 bg-green-200 text-green-700" variant="destructive">Published</Badge>
                            </div>
                            <p className="text-muted-foreground">Izmir / Turkey</p>
                        </div>
                        <div className="flex items-center justify-center text-muted-foreground">
                            Oct 25, 2023
                        </div>
                        <div className="flex items-center justify-center text-muted-foreground">
                            0
                        </div>
                        <div className="flex space-x-2 items-center justify-start">
                            <Button variant="secondary" className="rounded-xl">
                                <Megaphone className="h-4 w-4 mr-2" />
                                Promote
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="rounded-xl">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <PenSquare className="h-4 w-4 mr-3" />
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Eye className="h-4 w-4 mr-3" />
                                            View
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuGroup>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <div className="h-3 w-3 bg-green-300 rounded-full mr-3" />
                                                Online
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent className="rounded-xl">
                                                    <DropdownMenuItem className="flex items-start flex-col gap-y-1 hover:bg-sky-200 rounded-lg">
                                                        <span>Online</span>
                                                        <span className="text-xs">Job published, open for applications with<br/>candidate management.</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-start flex-col gap-y-1 hover:bg-sky-200 rounded-lg">
                                                        <span>Offline</span>
                                                        <span className="text-xs">Job unpublished, closed for<br/>applications with candidate management.</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-start flex-col gap-y-1 hover:bg-sky-200 rounded-lg">
                                                        <span>Archived</span>
                                                        <span className="text-xs">Position closed, candidate management<br/>unavailable.</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Copy className="h-4 w-4 mr-3" />
                                        Duplicate
                                    </DropdownMenuItem>
                                    <DropdownMenuGroup>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <Share className="h-4 w-4 mr-3" />
                                                Share
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent className="w-[200px]">
                                                    <DropdownMenuItem>
                                                        <Twitter className="h-4 w-4 mr-3 fill-blue-300 text-blue-300" />
                                                        Twitter
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Linkedin className="h-4 w-4 mr-3 fill-blue-500 text-blue-500" />
                                                        LinkedIn
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link className="h-4 w-4 mr-3" />
                                                        Copy URL
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </Card>
            </TabsContent>
            <TabsContent value="drafts" className="mt-6">
                <Card className="p-5">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="flex gap-x-2 items-center">
                                <span className="text-lg">Test Engineer</span>
                                <Badge className="py-0.5 px-3 bg-red-200 text-red-700" variant="destructive">Draft</Badge>
                            </div>
                            <p className="text-muted-foreground">Izmir / Turkey</p>
                        </div>
                        <div className="flex items-center justify-center text-muted-foreground">
                            Oct 25, 2023
                        </div>
                        <div className="flex space-x-2 items-center justify-start">
                            <Button variant="outline" size="icon" className="rounded-xl">
                                <PenSquare className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-xl">
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default AllJobs