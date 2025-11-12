"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { ValueCard } from "@/components/ui/value-card"
import { VALUES } from "@/lib/constants"

function MissionComponent() {
  return (
    <section
      id="mission"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-peacock to-laurel text-moonlight"
      aria-labelledby="mission-title"
    >
      <SectionContainer>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mustard/20 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-8 text-center relative z-10"
        >
          <div className="inline-block rounded-full bg-moonlight/20 px-3 py-1 text-sm text-moonlight font-medium">
            Ce qui nous anime
          </div>
          <h2 id="mission-title" className="text-3xl font-bold tracking-tighter md:text-4xl">
            Notre Mission
          </h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {VALUES.map((value) => (
              <ValueCard key={value.id} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  )
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export default memo(MissionComponent)
