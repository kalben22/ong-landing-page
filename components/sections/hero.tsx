"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"

export default function Hero() {
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

  return (
    <section id="hero" className="relative w-full py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-mustard/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-36 h-36 md:w-72 md:h-72 rounded-full bg-peacock/10 blur-3xl"></div>
      </div>
      <SectionContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-peacock">
              <span className="text-mustard">Ensemble</span>, créons un impact durable
            </h1>
            <p className="mx-auto max-w-[700px] text-peacock/80 md:text-xl">
              Nous sommes dédiés à faire une différence dans notre communauté.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Heart className="h-4 w-4 mr-2" />
              Faire un don
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </section>
  )
}
