"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { JobsColumn } from "./columns";
import { Megaphone } from "lucide-react";

interface CellActionProps {
    data: JobsColumn;
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex gap-x-4">
                <Button>
                    <Megaphone className="h-4 w-4 mr-2" />
                    Hello
                </Button>
            </div>
        </>
    );
};