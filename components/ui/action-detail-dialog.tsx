"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ActionDetail } from "@/types"

interface ActionDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  action: ActionDetail
}

export function ActionDetailDialog({ isOpen, onClose, action }: ActionDetailDialogProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Éviter les erreurs d'hydratation
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Fermer la modale avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Empêcher le défilement du body quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-peacock/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-moonlight shadow-2xl"
          >
            {/* Header avec image de couverture */}
            <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
              <Image
                src={action.coverImage || "/placeholder.svg?height=400&width=800"}
                alt={`${action.title} - Image de couverture`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
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

              {/* Galerie d'images */}
              {action.gallery && action.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-peacock">Galerie</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {action.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={img.url || "/placeholder.svg?height=200&width=200"}
                          alt={img.alt || `Image ${idx + 1}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 200px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Témoignages */}
              {action.testimonials && action.testimonials.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-peacock">Témoignages</h3>
                  <div className="space-y-4">
                    {action.testimonials.map((testimonial, idx) => (
                      <div key={idx} className="rounded-lg border border-laurel/20 bg-peacock/5 p-4">
                        <p className="mb-2 italic text-peacock/90">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-peacock">{testimonial.name}</p>
                            <p className="text-xs text-peacock/70">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bouton de fermeture en bas */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={onClose}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-peacock px-6 py-2 font-medium text-moonlight shadow-md transition-colors hover:bg-peacock/90",
                    "focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-2",
                  )}
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
