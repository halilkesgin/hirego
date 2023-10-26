import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Copy, Eye, Link, Linkedin, Megaphone, MoreHorizontal, PenSquare, Share, Twitter } from "lucide-react"
import Filter from "./filter"
import Options from "./options"

const AllJobsList = () => {
    return (
        <div>
            <div className="flex justify-between">
                <Filter />
                <Options />
            </div>
            <CardHeader className="grid grid-cols-4 gap-x-4 pb-3">
                <div className="font-medium">Sort by: <span className="font-normal">Title</span></div>
                <div className="font-medium">Updated</div>
                <div className="font-medium">Candidates</div>
            </CardHeader>
            <Card>
                <CardHeader className="grid grid-cols-4 gap-x-4">
                    <div className="flex flex-col gap-x-2">
                        <div className="flex gap-x-4">
                            <span className="text-md font-medium">Test Engineer</span>
                            <Badge variant="outline" className="bg-green-200 text-green-600 px-4 !py-0 !text-xs font-medium">online</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            İzmir / Turkey  
                        </p>
                    </div>
                    <div>Oct 25, 2023</div>
                    <div>0</div>
                    <div className="flex gap-x-2">
                        <Button variant="outline" className="rounded-xl bg-indigo-100 text-indigo-500 border-indigo-100">
                            <Megaphone className="h-4 w-4 mr-2 fill-indigo-500" />
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
                </CardHeader>
            </Card>
        </div>
    )
}

export default AllJobsList