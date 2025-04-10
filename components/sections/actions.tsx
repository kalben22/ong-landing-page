"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ActionCard } from "@/components/ui/action-card"
import { ACTIONS } from "@/lib/constants"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

function ActionsComponent() {
  return (
    <section id="actions" className="w-full py-16 md:py-24 bg-moonlight" aria-labelledby="actions-title">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <SectionHeading
            badge="Notre impact"
            badgeColor="laurel"
            title="Nos Actions"
            description="Découvrez comment nous faisons une différence dans notre communauté."
            centered
            id="actions-title"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {ACTIONS.map((action) => (
            <ActionCard
              key={action.id}
              title={action.title}
              description={action.description}
              icon={action.icon}
              link={action.link}
            />
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  )
}
// Mémoisation du composant pour éviter les re-rendus inutiles
export default memo(ActionsComponent)
