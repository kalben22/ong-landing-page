"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { BENEFICIAIRES } from "@/lib/constants"

function BeneficiairesComponent() {
  return (
    <section id="beneficiaires" className="w-full py-16 md:py-24 bg-peacock/5">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading
            badge="Notre communauté de voyageurs"
            badgeColor="peacock"
            title="Nos Bénéficiaires"
            description="De la première réservation au dernier coucher de soleil : ils valident l'expérience."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {BENEFICIAIRES.map((beneficiaire) => (
            <motion.div
              key={beneficiaire.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: beneficiaire.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mustard to-peacock opacity-20 blur-md"></div>
                <div className="relative z-10 h-[150px] w-[150px] md:h-[180px] md:w-[180px] overflow-hidden">
                  <Image
                    src={beneficiaire.image || "/placeholder.svg"}
                    alt={beneficiaire.name}
                    fill
                    sizes="(max-width: 768px) 150px, 180px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-peacock">{beneficiaire.name}</h3>
              <p className="text-sm text-peacock/70 mb-2">{beneficiaire.role}</p>
              <p className="text-center text-peacock/80 text-sm md:text-base italic">"{beneficiaire.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export default memo(BeneficiairesComponent)
