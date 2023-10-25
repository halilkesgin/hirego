import Container from "@/components/container"
import Heading from "@/components/heading"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, CheckCircle2, ChevronRight, Circle, Dot } from "lucide-react"
import Image from "next/image"

const CompanyPage = () => {
    return (
        <Container className="space-y-8">
            <Heading 
                title="Dashboard"
                subtitle="This is our dashboard subtitle content"
            />
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                <Card className="min-h-[450px]">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            Six steps to get started
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Take these easy steps to hire even faster with hirego
                        </CardDescription>
                        <div className="grid grid-cols-6 gap-x-2 !mt-5">
                            <Badge className="bg-green-700"></Badge>
                            <Badge className="bg-green-700"></Badge>
                            <Badge className="bg-green-700"></Badge>
                            <Badge variant="outline"></Badge>
                            <Badge variant="outline"></Badge>
                            <Badge variant="outline"></Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex gap-x-2 items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-700" />
                            <span className="text-sm line-through text-muted-foreground">Create your account</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-700" />
                            <span className="text-sm line-through text-muted-foreground">Verify your email address</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <Circle className="h-5 w-5 text-muted-foreground/50" />
                            <span className="text-sm text-muted-foreground">Add your import or company registration number</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-700" />
                            <span className="text-sm line-through text-muted-foreground">Create your first job ad</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <Circle className="h-5 w-5 text-muted-foreground/50" />
                            <span className="text-sm text-muted-foreground">Connect your company's LinkedIn profile</span>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <Circle className="h-5 w-5 text-muted-foreground/50" />
                            <span className="text-sm text-muted-foreground">Upload your company logo</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="min-h-[450px]">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            How it works
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            This is the helper of hirego
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <div className="flex items-center gap-x-2 cursor-pointer py-2 px-3 rounded-lg">
                                <Image
                                    src="https://github.com/shadcn.png"
                                    alt="Picture"
                                    width={75}
                                    height={75}
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col justify-between gap-y-3">
                                    <div className="flex justify-between">
                                        <div className="font-semibold flex-1 text-sm">Where are my jobs posted?</div>
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-sm">1 min</span>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="font-medium text-xs text-muted-foreground">Post your jobs on up to 100+ sites at once - with just one click. Get found by qualified candidates fast and start receiving applications quickly.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2 cursor-pointer py-2 px-3 rounded-lg">
                                <Image
                                    src="https://github.com/shadcn.png"
                                    alt="Picture"
                                    width={75}
                                    height={75}
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col justify-between gap-y-3">
                                    <div className="flex justify-between">
                                        <div className="font-semibold flex-1 text-sm">Where are my jobs posted?</div>
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-sm">1 min</span>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="font-medium text-xs text-muted-foreground">Post your jobs on up to 100+ sites at once - with just one click. Get found by qualified candidates fast and start receiving applications quickly.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2 cursor-pointer py-2 px-3 rounded-lg">
                                <Image
                                    src="https://github.com/shadcn.png"
                                    alt="Picture"
                                    width={75}
                                    height={75}
                                    className="rounded-lg"
                                />
                                <div className="flex flex-col justify-between gap-y-3">
                                    <div className="flex justify-between">
                                        <div className="font-semibold flex-1 text-sm">Where are my jobs posted?</div>
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-sm">1 min</span>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="font-medium text-xs text-muted-foreground">Post your jobs on up to 100+ sites at once - with just one click. Get found by qualified candidates fast and start receiving applications quickly.</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">
                            Jobs i follow
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-2">
                        <div className="flex gap-x-1 items-center text-sm">
                            <div className="font-semibold">Job Name</div>
                            <Dot className="h-5 w-5" />
                            <div className="text-muted-foreground/70">City, Country</div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            0 candidates
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Container>
    )
}

export default CompanyPage