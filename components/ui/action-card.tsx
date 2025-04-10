"use client"

import type React from "react"
import { memo } from "react"
import { motion } from "framer-motion"

interface ActionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
}

function ActionCardComponent({ title, description, icon, link }: ActionCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl border border-laurel/20 bg-gradient-to-br from-peacock/5 to-laurel/10 p-6 shadow-md transition-all"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mustard opacity-10 transition-all group-hover:opacity-20"></div>
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peacock">{icon}</div>
        <h3 className="mb-2 text-xl font-bold text-peacock">{title}</h3>
        <p className="text-peacock/80">{description}</p>
        {link && (
          <a
            href={link}
            className="mt-6 flex items-center text-mustard font-medium group-hover:underline"
            aria-label={`En savoir plus sur ${title}`}
          >
            <span>En savoir plus</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export const ActionCard = memo(ActionCardComponent)
