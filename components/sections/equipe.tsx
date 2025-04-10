"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { TeamMemberCard } from "@/components/ui/team-member-card"
import { TEAM_MEMBERS } from "@/lib/constants"

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

function EquipeComponent() {
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
            description="Découvrez les personnes passionnées qui font avancer notre mission chaque jour."
            centered
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  )
}

// Mémoisation du composant pour éviter les re-rendus inutiles
export default memo(EquipeComponent)
