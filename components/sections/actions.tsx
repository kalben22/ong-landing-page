"use client"

import { memo, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ActionCard } from "@/components/ui/action-card"
import { ActionModal } from "@/components/ui/action-modals"
import { ACTIONS, ACTIONS_DETAILS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import type { ActionDetail } from "@/types"

function ActionsComponent() {
  // Utiliser useState avec lazy initialization pour éviter les problèmes d'hydratation
  const [currentPage, setCurrentPage] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [selectedAction, setSelectedAction] = useState<ActionDetail | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const itemsPerPage = 3
  const totalPages = Math.ceil(ACTIONS.length / itemsPerPage)

  // S'assurer que le composant est monté côté client avant de rendre des éléments interactifs
  useEffect(() => {
    setIsMounted(true)
    setIsClient(true)
  }, [])

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const handleShowDetails = (action: ActionDetail) => {
    setSelectedAction(action)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Calculer les actions visibles - Toujours afficher les 3 premières au rendu initial
  const visibleActions = isClient
    ? ACTIONS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : ACTIONS.slice(0, itemsPerPage)

  return (
    <section id="actions" className="w-full py-16 md:py-24 bg-moonlight" aria-labelledby="actions-title">
      <SectionContainer>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <SectionHeading
            badge="Notre impact"
            badgeColor="laurel"
            title="Nos Actions"
            description=" Découvrez comment nous faisons une différence dans notre communauté."
            centered
            id="actions-title"
          />
        </div>

        <div className="relative">
          {/* Navigation buttons - Seulement affichés côté client */}
          {isMounted && totalPages > 1 && (
            <>
              <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-peacock text-moonlight shadow-md transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-2",
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-peacock/90",
                )}
                aria-label="Actions précédentes"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-peacock text-moonlight shadow-md transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-2",
                  currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-peacock/90",
                )}
                aria-label="Actions suivantes"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Actions grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-6 md:px-10">
            {visibleActions.map((action) => {
              const actionDetails = ACTIONS_DETAILS.find((detail) => detail.id === action.id) || null

              return (
                <div key={action.id} className="h-full">
                  <ActionCard
                    id={action.id}
                    title={action.title}
                    description={action.description}
                    icon={action.icon}
                    link={action.link}
                    enableHover={isClient}
                    onShowDetails={handleShowDetails}
                    actionDetails={actionDetails}
                  />
                </div>
              )
            })}
          </div>

          {/* Pagination indicators - Seulement affichés côté client */}
          {isMounted && totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    currentPage === index ? "w-6 bg-mustard" : "w-2 bg-peacock/30",
                  )}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Modal pour les détails d'action */}
      <ActionModal action={selectedAction} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export default memo(ActionsComponent)
