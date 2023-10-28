"use client"

import { cn } from "@/lib/utils"
import clsx from "clsx"
import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
} from "react-hook-form"

interface InputProps {
    label: string
    id: string
    className?: string
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    register,
    required,
    className,
    errors,
    type = "text",
    disabled,
}) => {
    return ( 
        <div>
            <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
            </label>
            <div className="">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className,
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-default"
                    )}
                />
            </div>
        </div>
   );
}
 
export default Input;