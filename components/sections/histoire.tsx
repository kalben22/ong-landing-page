"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { HistoireSection } from "@/components/ui/histoire-section"
import { HISTOIRE_SECTIONS } from "@/lib/constants"

export default function Histoire() {
  return (
    <section id="histoire" className="relative w-full py-12 md:py-16 lg:py-24 bg-peacock/5 overflow-hidden">
      {/* Cercles décoratifs globaux en arrière-plan */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-laurel/20 blur-xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 md:w-56 md:h-56 rounded-full bg-mustard/15 blur-xl -z-10"></div>

      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <SectionHeading
            badge="Notre parcours"
            badgeColor="mustard"
            title="Notre Histoire"
            description="Découvrez comment notre Association a évolué au fil des années et l'impact que nous avons eu."
            centered
          />
        </motion.div>

        <div className="space-y-10 md:space-y-16">
          {HISTOIRE_SECTIONS.map((section, index) => (
            <HistoireSection
              key={section.id}
              title={section.title}
              content={section.content}
              image={section.image}
              imageAlt={section.imageAlt}
              reverse={index % 2 !== 0}
              // Aucune modification ici, tout se passe dans HistoireSection
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}