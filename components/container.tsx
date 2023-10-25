'use client';

import { cn } from "@/lib/utils";
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return ( 
        <div className={cn(
            "max-w-[2520px] mx-auto xl:px-20 mt-8 md:px-10 sm:px-2 px-4 pb-8",
            className
        )}>
            {children}
        </div>
    );
}
 
export default Container;