"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface HistoireSectionProps {
  title: string
  content: string[]
  image: string
  imageAlt: string
  reverse?: boolean
}

export function HistoireSection({ title, content, image, imageAlt, reverse = false }: HistoireSectionProps) {
  return (
    <div className={`grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h3 className="text-xl md:text-2xl font-bold text-peacock">{title}</h3>
        <div className="space-y-3">
          {content.map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base text-peacock/80">
              {paragraph.replace(/Association/g, "ONG")}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`relative ${reverse ? "lg:order-first" : ""}`}
      >
        {/* Cercles décoratifs en arrière-plan avec z-index négatif */}
        <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-laurel rounded-full opacity-30 -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-mustard rounded-full opacity-20 -z-10"></div>

        <div className="relative aspect-[4/3] w-full max-h-[200px] md:max-h-[250px] z-10">
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="rounded-lg object-cover shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
        </div>
      </motion.div>
    </div>
  )
}
