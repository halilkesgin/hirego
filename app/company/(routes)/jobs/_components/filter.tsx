"use client"

import { FilterIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Filter = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="flex rounded-xl items-center">
                    <FilterIcon className="h-4 w-4 mr-2" />
                    Add filters
                </Button>
            </SheetTrigger>
            <SheetContent>
                Hello
            </SheetContent>
        </Sheet>  
    )
}

export default Filter