"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  role: string
  image: string
  bio: string
  enableHover?: boolean
}

function TeamMemberCardComponent({ name, role, image, bio, enableHover = false }: TeamMemberCardProps) {
  // Composant de base sans animation pour le rendu initial
  const baseComponent = (
    <div className="flex flex-col items-center space-y-4 rounded-xl bg-moonlight p-6 shadow-md border border-laurel/20">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mustard to-peacock opacity-20 blur-md"></div>
        <div className="relative z-10 h-[120px] w-[100px] rounded-[50%/60%] overflow-hidden border-2 border-laurel">
          <Image src={image || "/placeholder.svg"} alt={name} fill sizes="100px" className="object-cover" priority />
        </div>
      </div>
      <h3 className="text-xl font-bold text-peacock">{name}</h3>
      <p className="text-sm text-peacock/70">{role}</p>
      <p className="text-center text-peacock/80">{bio}</p>
    </div>
  )

  // Si les animations sont activées (côté client), utiliser motion.div
  if (enableHover) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center space-y-4 rounded-xl bg-moonlight p-6 shadow-md border border-laurel/20"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mustard to-peacock opacity-20 blur-md"></div>
          <div className="relative z-10 h-[120px] w-[100px] rounded-[50%/60%] overflow-hidden border-2 border-laurel">
            <Image src={image || "/placeholder.svg"} alt={name} fill sizes="100px" className="object-cover" priority />
          </div>
        </div>
        <h3 className="text-xl font-bold text-peacock">{name}</h3>
        <p className="text-sm text-peacock/70">{role}</p>
        <p className="text-center text-peacock/80">{bio}</p>
      </motion.div>
    )
  }

  return baseComponent
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export const TeamMemberCard = memo(TeamMemberCardComponent)
