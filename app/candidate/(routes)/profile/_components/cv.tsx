"use client"

import { 
    Paperclip, 
} from "lucide-react"

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Cv = () => {
    return (
        <Card className="rounded-xl">
            <CardHeader className="flex">
                <CardTitle className="text-[20px]">
                    CV
                </CardTitle>
                <CardDescription className="text-muted-foreground/75 font-medium">
                    This CV will by default be used for your future applications. Of course, you will always have the option to upload another CV during eachapplication process.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative">
                    <div className="w-full rounded-xl border focus-visible:ring-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <div className="p-7 bg-slate-100 rounded-l-xl">
                                    <Paperclip className="h-5 w-5 text-slate-600" />
                                </div>
                                <div>
                                    <span className="font-bold">CV</span>
                                    <div className="text-xs text-muted-foreground">
                                        .doc, .docx, .pdf, .rtf, .txt
                                    </div>
                                </div>
                            </div>
                            <Button className="mr-5" variant="outline">
                                Select file
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Cv