"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  role: string
  image: string
  bio: string
}

function TeamMemberCardComponent({ name, role, image, bio }: TeamMemberCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center space-y-4 rounded-xl bg-moonlight p-6 shadow-md border border-laurel/20"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mustard to-peacock opacity-20 blur-md"></div>
        <Image
          src={image || "/placeholder.svg?height=120&width=120"}
          alt={name}
          width={120}
          height={120}
          className="relative z-10 rounded-full object-cover border-2 border-laurel"
        />
      </div>
      <h3 className="text-xl font-bold text-peacock">{name}</h3>
      <p className="text-sm text-peacock/70">{role}</p>
      <p className="text-center text-peacock/80">{bio}</p>
    </motion.div>
  )
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export const TeamMemberCard = memo(TeamMemberCardComponent)
