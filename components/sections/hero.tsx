"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { HERO_SLIDES } from "@/lib/constants"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Éviter les problèmes d'hydratation
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Rotation automatique des slides
  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isClient])

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slider d'images */}
      <AnimatePresence mode="wait">
        {isClient && (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-peacock/40 backdrop-blur-[2px]"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu */}
      <SectionContainer className="relative h-full flex flex-col items-center justify-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-moonlight">
              <span className="text-mustard">Ensemble</span>, créons un impact durable
            </h1>
            <p className="mx-auto max-w-[700px] text-moonlight/90 md:text-xl">
              Nous sommes dédiés à faire une différence dans notre communauté.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Heart className="h-4 w-4 mr-2" />
              Faire un don
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-moonlight/20 border-moonlight text-moonlight hover:bg-moonlight/30"
            >
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Contrôles du slider */}
      {isClient && (
        <>
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-moonlight/20 text-moonlight hover:bg-moonlight/30 transition-all"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-moonlight/20 text-moonlight hover:bg-moonlight/30 transition-all"
            aria-label="Slide suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicateurs de slides */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-mustard" : "w-2 bg-moonlight/50"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
