"use client"

import { useEffect,useState } from "react"
import { File } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"
import { useSearch } from "@/hooks/use-search"

export const SearchCommand = () => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    const toggle = useSearch((store) => store.toggle)
    const isOpen = useSearch((store) => store.isOpen)
    const onClose = useSearch((store) => store.onClose)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                toggle()
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [toggle])

    const onSelect = (id: string) => {
        router.push("/company") // will be edited
        onClose()
    }

    if (!isMounted) {
        return null
    }

    return (
        <CommandDialog open={isOpen} onOpenChange={onClose}>
            <CommandInput 
                placeholder="Search"
            />
            <CommandList>
                <CommandEmpty>
                    No results found
                </CommandEmpty>
                <CommandGroup >
                    
                        <CommandItem
                            value="test"
                            title="title"
                            onSelect={onSelect}
                        >
                                <p className="mr-2 text-[18px]">
                                    icon
                                </p>
                                <File className="mr-2 h-4 w-4" />
                            <span>
                                hi
                            </span>
                        </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}