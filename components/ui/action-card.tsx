"use client"

import type React from "react"
import { memo, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { ACTIONS_DETAILS } from "@/lib/constants"

interface ActionCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  enableHover?: boolean
}

function ActionCardComponent({ id, title, description, icon, enableHover = false }: ActionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Trouver les détails complets de l'action
  const actionDetails = ACTIONS_DETAILS.find((action) => action.id === id)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // Composant de base sans animation pour le rendu initial
  const baseComponent = (
    <div className="group relative overflow-hidden rounded-xl border border-laurel/20 bg-gradient-to-br from-peacock/5 to-laurel/10 p-6 shadow-md">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mustard opacity-10"></div>
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peacock">{icon}</div>
        <h3 className="mb-2 text-xl font-bold text-peacock">{title}</h3>
        <p className="text-peacock/80">{description}</p>

        {actionDetails && (
          <button
            onClick={toggleExpand}
            className="mt-4 flex w-full items-center justify-between text-mustard font-medium"
            aria-expanded={isExpanded}
            aria-controls={`action-details-${id}`}
          >
            <span>{isExpanded ? "Voir moins" : "En savoir plus"}</span>
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        )}

        {/* Contenu de l'accordéon */}
        {actionDetails && (
          <div
            id={`action-details-${id}`}
            className={cn(
              "mt-4 overflow-hidden transition-all duration-300",
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="pt-2 border-t border-laurel/20">
              {actionDetails.description.map((paragraph, idx) => (
                <p key={idx} className="mb-3 text-sm text-peacock/80">
                  {paragraph}
                </p>
              ))}

              {/* Statistiques */}
              {actionDetails.stats && actionDetails.stats.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-2 text-lg font-semibold text-peacock">Impact</h4>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {actionDetails.stats.slice(0, 3).map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center rounded-lg bg-peacock/5 p-2 text-center">
                        <span className="text-lg font-bold text-mustard">{stat.value}</span>
                        <span className="text-xs text-peacock/80">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Témoignage */}
              {actionDetails.testimonials && actionDetails.testimonials.length > 0 && (
                <div className="mt-4">
                  <div className="rounded-lg border border-laurel/20 bg-peacock/5 p-3">
                    <p className="mb-2 text-sm italic text-peacock/90">"{actionDetails.testimonials[0].quote}"</p>
                    <p className="text-xs font-medium text-peacock">
                      - {actionDetails.testimonials[0].name}, {actionDetails.testimonials[0].role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  // Si les animations sont activées (côté client), utiliser motion.div
  if (enableHover) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl border border-laurel/20 bg-gradient-to-br from-peacock/5 to-laurel/10 p-6 shadow-md transition-all"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mustard opacity-10 transition-all group-hover:opacity-20"></div>
        <div className="relative z-10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peacock">{icon}</div>
          <h3 className="mb-2 text-xl font-bold text-peacock">{title}</h3>
          <p className="text-peacock/80">{description}</p>

          {actionDetails && (
            <button
              onClick={toggleExpand}
              className="mt-4 flex w-full items-center justify-between text-mustard font-medium group-hover:underline"
              aria-expanded={isExpanded}
              aria-controls={`action-details-${id}`}
            >
              <span>{isExpanded ? "Voir moins" : "En savoir plus"}</span>
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          )}

          {/* Contenu de l'accordéon */}
          {actionDetails && (
            <div
              id={`action-details-${id}`}
              className={cn(
                "mt-4 overflow-hidden transition-all duration-300",
                isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="pt-2 border-t border-laurel/20">
                {actionDetails.description.map((paragraph, idx) => (
                  <p key={idx} className="mb-3 text-sm text-peacock/80">
                    {paragraph}
                  </p>
                ))}

                {/* Statistiques */}
                {actionDetails.stats && actionDetails.stats.length > 0 && (
                  <div className="mt-4">
                    <h4 className="mb-2 text-lg font-semibold text-peacock">Impact</h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {actionDetails.stats.slice(0, 3).map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center rounded-lg bg-peacock/5 p-2 text-center">
                          <span className="text-lg font-bold text-mustard">{stat.value}</span>
                          <span className="text-xs text-peacock/80">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Témoignage */}
                {actionDetails.testimonials && actionDetails.testimonials.length > 0 && (
                  <div className="mt-4">
                    <div className="rounded-lg border border-laurel/20 bg-peacock/5 p-3">
                      <p className="mb-2 text-sm italic text-peacock/90">"{actionDetails.testimonials[0].quote}"</p>
                      <p className="text-xs font-medium text-peacock">
                        - {actionDetails.testimonials[0].name}, {actionDetails.testimonials[0].role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return baseComponent
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export const ActionCard = memo(ActionCardComponent)
