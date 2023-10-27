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
    errors,
    type = "text",
    disabled,
}) => {
    return ( 
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 mb-1 text-gray-900">
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
                        "block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-slate-500 placeholder:text-gray-400 sm:text-sm sm:leading-6",
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-default"
                    )}
                />
            </div>
        </div>
   );
}
 
export default Input;