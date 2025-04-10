"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
  variant?: "default" | "large"
}

export function SocialIcon({ href, icon, label, variant = "default" }: SocialIconProps) {
  const variantStyles = {
    default: "h-8 w-8 bg-moonlight/10 text-moonlight hover:bg-mustard",
    large: "h-10 w-10 bg-peacock text-moonlight hover:bg-mustard",
  }

  return (
    <motion.a
      whileHover={{ y: -3 }}
      href={href}
      className={`flex items-center justify-center rounded-full ${variantStyles[variant]} transition-colors`}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </motion.a>
  )
}
