"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Sliders } from "lucide-react"

const Options = () => {
    return (
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
    )
}

export default Options