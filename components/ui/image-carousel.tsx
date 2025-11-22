import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  images: string[]
  alts?: string[]
  interval?: number
  className?: string
}

export default function ImageCarousel({ images, alts = [], interval = 4000, className = "" }: Props) {
  const [index, setIndex] = useState(0)
  const pauseRef = useRef(false)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const id = setInterval(() => {
      if (!pauseRef.current) setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images, interval])

  if (!images || images.length === 0) return null

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => (pauseRef.current = true)}
      onMouseLeave={() => (pauseRef.current = false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <motion.img
            key={index}
            src={images[index]}
            alt={alts[index] || `Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
        />
      </AnimatePresence>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller à la diapositive ${i + 1}`}
              className={`h-2 w-8 rounded-full transition-all ${i === index ? "bg-mustard" : "bg-peacock/30"}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}