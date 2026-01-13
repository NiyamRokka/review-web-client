import React from 'react'
import { ReactNode } from "react";

interface IProps {
  label?: string;
  children?: ReactNode;
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button:React.FC<IProps> = ({label='Button',type='button',disabled=false,className,children}) => {
    return (
        <button
        disabled={disabled}
            type={type}
            className={`
    w-full rounded-md px-4 py-2.5 text-sm font-medium
    bg-primary text-primary-foreground
    shadow-md shadow-primary/20
    transition-all duration-200

    hover:shadow-lg hover:shadow-primary/30
    hover:brightness-110

    focus:outline-none
    focus:ring-2 focus:ring-primary focus:ring-offset-2
    focus:ring-offset-background

    disabled:opacity-50 disabled:cursor-not-allowed
    ${className ?? ""}
  `}
        >
            {children ?? label}
        </button>
    )
}

export default Button