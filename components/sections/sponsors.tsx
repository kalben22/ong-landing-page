import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { SectionContainer } from "@/components/ui/section-container"
import { SPONSORS } from "@/lib/constants"

export default function PartnersSection() {
  const controls = useAnimation()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const duration = 20
  const direction: "rtl" | "ltr" = "rtl"

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (prefersReducedMotion) return

    const el = trackRef.current
    if (!el) return

    const updateAnimation = () => {
      const totalWidth = el.scrollWidth
      const singleWidth = totalWidth / 2
      const animDuration = Math.max(
        8,
        duration * (singleWidth / window.innerWidth)
      )

      controls.start({
        x: [0, direction === "rtl" ? -singleWidth : singleWidth],
        transition: { repeat: Infinity, ease: "linear", duration: animDuration },
      })
    }

    updateAnimation()

    const handleResize = () => {
      controls.stop()
      setTimeout(updateAnimation, 60)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [controls, direction, prefersReducedMotion])

  const items = [...SPONSORS, ...SPONSORS]

  const restart = () => {
    if (prefersReducedMotion) return
    const el = trackRef.current
    if (!el) return

    const totalWidth = el.scrollWidth
    const singleWidth = totalWidth / 2

    const animDuration = Math.max(
      8,
      duration * (singleWidth / window.innerWidth)
    )

    controls.start({
      x: [0, direction === "rtl" ? -singleWidth : singleWidth],
      transition: { repeat: Infinity, ease: "linear", duration: animDuration },
    })
  }

  return (
    <section id="partners" className="py-12 bg-moonlight/50">
      <SectionContainer>
        <h3 className="text-center text-xl md:text-2xl font-semibold text-peacock mb-6">
          Notre partenaire
        </h3>

        {/* Cadre/boîte autour du défilement */}
        <div className="mx-auto bg-white/10 overflow-hidden">
          <div
            className="w-full"
            style={{ height: "clamp(72px, 9vw, 120px)" }}
          >
            <motion.div
              ref={trackRef}
              className="flex items-center gap-10 h-full will-change-transform"
              animate={controls}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() => setTimeout(restart, 40)}
              onTouchStart={() => controls.stop()}
              onTouchEnd={() => setTimeout(restart, 60)}
            >
              {items.map((s, idx) => (
                <a
                  key={`${s.id}-${idx}`}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter ${s.name}`}
                  className="flex items-center justify-center shrink-0 hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard rounded-full"
                  style={{
                    minWidth: 100,
                    padding: "0 20px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "clamp(60px, 10vw, 160px)",
                      height: "60%",
                    }}
                    className="relative"
                  >
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      sizes="(max-width: 640px) 56px, (max-width: 1024px) 96px, 160px"
                      style={{ objectFit: "contain" }}
                      priority={idx < SPONSORS.length}
                    />
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}