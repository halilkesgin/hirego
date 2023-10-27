import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CheckCircle } from "lucide-react"
import { ReactNode } from "react"

const AuthCandidateSignUpLayout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div className="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-3 lg:grid-cols-[30%_65%_5%]">
            <div className="relative hidden flex-1 flex-col gap-y-4 justify-between px-5 pt-8 bg-gradient-to-r from-indigo-500 from-10% via-indigo-400 via-30% to-indigo-200 to-87% md:flex md:px-6 md:py-[22px] lg:px-8">
                <span className="font-bold text-3xl text-white">
                   hirego
                </span>
                <div className="flex flex-col gap-y-4 text-white h-2/3">
                    <span className="text-4xl font-bold ">
                        Welcome to hirego!
                    </span>
                    <div className="flex items-center font-semibold">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Simply create your account
                    </div>
                    <div className="flex items-center font-semibold">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Apply quickly and easily for jobs
                    </div>
                    <div className="flex items-center font-semibold">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Check the status of your applications
                    </div>
                </div>
            </div>
            <div className="relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6">
                <div className="relative flex w-full grow flex-col items-center justify-center">
                    {children}
                </div>
            </div>
            <div className="hidden md:block">
                <div className="flex justify-end px-2 pt-8">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Language
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>Turkish</DropdownMenuItem>
                            <DropdownMenuItem>French</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>

    )
}

export default AuthCandidateSignUpLayout