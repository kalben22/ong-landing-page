"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { ActionDetail } from "@/types"

interface ActionModalProps {
  action: ActionDetail | null
  isOpen: boolean
  onClose: () => void
}

export function ActionModal({ action, isOpen, onClose }: ActionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Fermer le modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Empêcher le défilement du body quand le modal est ouvert
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Fermer le modal si on clique en dehors
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!action) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Overlay avec flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-peacock/40 backdrop-blur-sm"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-auto rounded-xl bg-white shadow-2xl"
          >
            {/* Header avec image de couverture */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden">
              <img
                src={action.coverImage || "/placeholder.svg?height=400&width=800"}
                alt={`${action.title} - Image de couverture`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peacock/80 to-transparent" />

              {/* Bouton de fermeture */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full bg-moonlight/90 p-2 text-peacock shadow-md transition-colors hover:bg-moonlight"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Titre sur l'image */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-moonlight">{action.title}</h2>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <div className="prose prose-peacock max-w-none">
                {action.description.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-peacock/90">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Statistiques */}
              {action.stats && action.stats.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-peacock">Impact</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {action.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center rounded-lg bg-peacock/5 p-4 text-center">
                        <span className="text-2xl font-bold text-mustard">{stat.value}</span>
                        <span className="text-sm text-peacock/80">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Galerie d'images */}
              {action.gallery && action.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-peacock">Galerie</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {action.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                        <img
                          src={img.url || "/placeholder.svg?height=200&width=200"}
                          alt={img.alt || `Image ${idx + 1}`}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Témoignages */}
              {action.testimonials && action.testimonials.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-peacock">Témoignages</h3>
                  <div className="space-y-4">
                    {action.testimonials.map((testimonial, idx) => (
                      <div key={idx} className="rounded-lg border border-laurel/20 bg-peacock/5 p-4">
                        <p className="mb-2 italic text-peacock/90">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          {testimonial.avatar && (
                            <div className="relative h-10 w-10 overflow-hidden rounded-full mr-3">
                              <img
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-peacock">{testimonial.name}</p>
                            <p className="text-xs text-peacock/70">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
