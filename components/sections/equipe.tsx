"use client"

import { memo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { TeamMemberCard } from "@/components/ui/team-member-card"
import { TEAM_MEMBERS } from "@/lib/constants"
import { cn } from "@/lib/utils"

function EquipeComponent() {
  // Utiliser useState avec lazy initialization pour éviter les problèmes d'hydratation
  const [currentPage, setCurrentPage] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const itemsPerPage = 3
  const totalPages = Math.ceil(TEAM_MEMBERS.length / itemsPerPage)

  // S'assurer que le composant est monté côté client avant de rendre des éléments interactifs
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  // Calculer les membres visibles
  const visibleMembers = TEAM_MEMBERS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section id="equipe" className="w-full py-16 md:py-24">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <SectionHeading
            badge="Les visages derrière notre mission"
            badgeColor="peacock"
            title="Notre Équipe"
            description="[Votre contenu ici] Découvrez les personnes passionnées qui font avancer notre mission chaque jour."
            centered
          />
        </motion.div>

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
                aria-label="Membres précédents"
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
                aria-label="Membres suivants"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Team members grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-10">
            {visibleMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
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
    </section>
  )
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export default memo(EquipeComponent)
