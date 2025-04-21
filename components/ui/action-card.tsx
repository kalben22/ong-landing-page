"use client"

import type React from "react"
import { memo } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type { ActionDetail } from "@/types"

interface ActionCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  enableHover?: boolean
  onShowDetails: (action: ActionDetail) => void
  actionDetails: ActionDetail | null
}

function ActionCardComponent({
  id,
  title,
  description,
  icon,
  enableHover = false,
  onShowDetails,
  actionDetails,
}: ActionCardProps) {
  const handleShowDetails = () => {
    if (actionDetails) {
      onShowDetails(actionDetails)
    }
  }

  // Composant de base sans animation pour le rendu initial
  const baseComponent = (
    <div className="group relative overflow-hidden rounded-xl border border-laurel/20 bg-gradient-to-br from-peacock/5 to-laurel/10 p-6 shadow-md h-full flex flex-col">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mustard opacity-10"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peacock">{icon}</div>
        <h3 className="mb-2 text-xl font-bold text-peacock">{title}</h3>
        <p className="text-peacock/80 flex-grow">{description}</p>

        {actionDetails && (
          <button
            onClick={handleShowDetails}
            className="mt-4 flex items-center justify-between text-mustard font-medium"
            aria-controls={`action-details-${id}`}
          >
            <span>En savoir plus</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )

  // Si les animations sont activées (côté client), utiliser motion.div
  if (enableHover) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl border border-laurel/20 bg-gradient-to-br from-peacock/5 to-laurel/10 p-6 shadow-md transition-all h-full flex flex-col"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mustard opacity-10 transition-all group-hover:opacity-20"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peacock">{icon}</div>
          <h3 className="mb-2 text-xl font-bold text-peacock">{title}</h3>
          <p className="text-peacock/80 flex-grow">{description}</p>

          {actionDetails && (
            <button
              onClick={handleShowDetails}
              className="mt-4 flex items-center justify-between text-mustard font-medium group-hover:underline"
              aria-controls={`action-details-${id}`}
            >
              <span>En savoir plus</span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </motion.div>
    )
  }

  return baseComponent
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export const ActionCard = memo(ActionCardComponent)
