"use client"

import { memo, useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionContainer } from "@/components/ui/section-container"
import { BENEFICIAIRES } from "@/lib/constants"
import { cn } from "@/lib/utils"

function BeneficiairesComponent() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Nombre d'éléments visibles selon la taille de l'écran
  const getVisibleItems = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    setIsMounted(true)
    setVisibleItems(getVisibleItems())

    const handleResize = () => {
      setVisibleItems(getVisibleItems())
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(BENEFICIAIRES.length / visibleItems)
  const canScrollLeft = activeIndex > 0
  const canScrollRight = activeIndex < totalSlides - 1

  const handlePrev = () => {
    if (canScrollLeft) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const handleNext = () => {
    if (canScrollRight) {
      setActiveIndex(activeIndex + 1)
    }
  }

  useEffect(() => {
    if (scrollRef.current && isMounted) {
      const scrollAmount = activeIndex * (containerWidth || 0)
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [activeIndex, containerWidth, isMounted])

  return (
    <section id="beneficiaires" className="w-full py-16 md:py-24 bg-peacock/5 overflow-hidden">
      <SectionContainer>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-peacock mb-4">Notre communauté de bénéficiaires</h2>
          <p className="text-lg md:text-xl text-peacock/80 max-w-3xl mx-auto">
            De la première aide au changement de vie : ils témoignent de notre impact.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Navigation buttons */}
          {isMounted && (
            <>
              <button
                onClick={handlePrev}
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-peacock text-moonlight shadow-md transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-2",
                  !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-peacock/90",
                )}
                disabled={!canScrollLeft}
                aria-label="Voir les bénéficiaires précédents"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-peacock text-moonlight shadow-md transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-2",
                  !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-peacock/90",
                )}
                disabled={!canScrollRight}
                aria-label="Voir les bénéficiaires suivants"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Carousel container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-10 -mx-10 pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-6 md:space-x-8">
              {BENEFICIAIRES.map((beneficiaire) => (
                <motion.div
                  key={beneficiaire.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <div className="rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col">
                    {/* Image en haut */}
                    <div className="relative h-[180px] w-full bg-peacock/20">
                      <Image
                        src={beneficiaire.image || "/placeholder.svg"}
                        alt={beneficiaire.name}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Contenu texte */}
                    <div className="p-4 bg-gradient-to-b from-peacock/10 to-laurel/5 flex-grow flex flex-col">
                      {/* Nom et rôle */}
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-peacock">{beneficiaire.name}</h3>
                        <p className="text-sm text-peacock/80">{beneficiaire.role}</p>
                      </div>

                      {/* Témoignage avec guillemets adaptés */}
                      <div className="relative flex-grow">
                        <div className="flex flex-col">
                          <div className="flex items-start mb-1">
                            <span className="text-3xl text-mustard opacity-60 leading-none mr-1">"</span>
                            <div className="flex-grow">
                              <p className="text-sm italic text-peacock/90">{beneficiaire.testimonial}</p>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <span className="text-3xl text-mustard opacity-60 leading-none">"</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination indicators */}
          {isMounted && totalSlides > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    activeIndex === index ? "w-8 bg-mustard" : "w-2 bg-peacock/30",
                  )}
                  aria-label={`Aller à la page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  )
}

export default memo(BeneficiairesComponent)
