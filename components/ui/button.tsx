"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium shadow-md transition-colors"

    const variantStyles = {
      primary: "bg-mustard text-moonlight hover:bg-mustard/90",
      secondary: "bg-peacock text-moonlight hover:bg-peacock/90",
      outline: "bg-transparent border border-peacock text-peacock hover:bg-peacock/10",
    }

    const sizeStyles = {
      sm: "h-9 px-3 sm:px-4 py-2 text-xs sm:text-sm",
      md: "h-10 px-4 sm:px-5 py-2 text-sm",
      lg: "h-11 sm:h-12 px-5 sm:px-6 py-2.5 text-sm sm:text-base",
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = "Button"
