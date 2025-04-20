"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ValueCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center space-y-3 rounded-xl bg-moonlight/10 p-6 backdrop-blur-sm"
    >
      <div className="rounded-full bg-mustard p-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-moonlight/90 text-center">{description}</p>
    </motion.div>
  )
}
