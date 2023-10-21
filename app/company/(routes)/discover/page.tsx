import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Dot, Folder, Grip, Map, MapPin, MoreHorizontal, Plus } from "lucide-react"

const DiscoverPage = () => {
    return (
        <div className="container py-5">
            <div className="grid grid-cols-3 gap-5">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>
                                <span className="text-[16px] hover:underline hover:transition duration-300">
                                    Product Engineer
                                </span>
                            </CardTitle>
                            <Button className="h-7 w-7 border-0 p-1" variant="outline" size="icon">
                                <MoreHorizontal />
                            </Button>
                        </div>
                        <CardDescription className="flex gap-x-5">
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <MapPin className="h-4 w-4"/>
                                <span className="text-xs">İzmir, Türkiye</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Briefcase className="h-4 w-4"/>
                                <span className="text-xs">Employee</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Folder className="h-4 w-4"/>
                                <span className="text-xs">Software</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center space-x-4">
                            <Badge variant="outline" className="w-full rounded-lg bg-cyan-100 border-cyan-200">
                                <span>Blue</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-orange-100 border-orange-200">
                                <span>Orange</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-red-100 border-red-200">
                                <span>Red</span>
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>
                                <span className="text-[16px] hover:underline hover:transition duration-300">
                                    Product Engineer
                                </span>
                            </CardTitle>
                            <Button className="h-7 w-7 border-0 p-1" variant="outline" size="icon">
                                <MoreHorizontal />
                            </Button>
                        </div>
                        <CardDescription className="flex gap-x-5">
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <MapPin className="h-4 w-4"/>
                                <span className="text-xs">İzmir, Türkiye</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Briefcase className="h-4 w-4"/>
                                <span className="text-xs">Employee</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Folder className="h-4 w-4"/>
                                <span className="text-xs">Software</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center space-x-4">
                            <Badge variant="outline" className="w-full rounded-lg bg-cyan-100 border-cyan-200">
                                <span>Blue</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-orange-100 border-orange-200">
                                <span>Orange</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-red-100 border-red-200">
                                <span>Red</span>
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>
                                <span className="text-[16px] hover:underline hover:transition duration-300">
                                    Product Engineer
                                </span>
                            </CardTitle>
                            <Button className="h-7 w-7 border-0 p-1" variant="outline" size="icon">
                                <MoreHorizontal />
                            </Button>
                        </div>
                        <CardDescription className="flex gap-x-5">
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <MapPin className="h-4 w-4"/>
                                <span className="text-xs">İzmir, Türkiye</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Briefcase className="h-4 w-4"/>
                                <span className="text-xs">Employee</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Folder className="h-4 w-4"/>
                                <span className="text-xs">Software</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center space-x-4">
                            <Badge variant="outline" className="w-full rounded-lg bg-cyan-100 border-cyan-200">
                                <span>Blue</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-orange-100 border-orange-200">
                                <span>Orange</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-red-100 border-red-200">
                                <span>Red</span>
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>
                                <span className="text-[16px] hover:underline hover:transition duration-300">
                                    Product Engineer
                                </span>
                            </CardTitle>
                            <Button className="h-7 w-7 border-0 p-1" variant="outline" size="icon">
                                <MoreHorizontal />
                            </Button>
                        </div>
                        <CardDescription className="flex gap-x-5">
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <MapPin className="h-4 w-4"/>
                                <span className="text-xs">İzmir, Türkiye</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Briefcase className="h-4 w-4"/>
                                <span className="text-xs">Employee</span>
                            </div>
                            <div className="flex items-center font-semibold gap-x-2 text-muted-foreground/60">
                                <Folder className="h-4 w-4"/>
                                <span className="text-xs">Software</span>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center space-x-4">
                            <Badge variant="outline" className="w-full rounded-lg bg-cyan-100 border-cyan-200">
                                <span>Blue</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-orange-100 border-orange-200">
                                <span>Orange</span>
                            </Badge>
                            <Badge variant="outline" className="w-full rounded-lg bg-red-100 border-red-200">
                                <span>Red</span>
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
                <Card className="hover:bg-cyan-100 cursor-pointer">
                    <div className="flex flex-col h-full space-y-1 items-center justify-center">
                        <Plus className="h-7 w-7" />
                        <span className="text-sm font-semibold">Add new job</span>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default DiscoverPage