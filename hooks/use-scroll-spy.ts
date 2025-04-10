"use client"

import { useState, useEffect } from "react"

/**
 * Hook pour détecter la section active lors du défilement
 */
export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Trouver la section actuellement visible
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    // Initialiser au chargement
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
