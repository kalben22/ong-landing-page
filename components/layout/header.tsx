"use client"

import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { NAV_ITEMS } from "@/lib/constants"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useScrollSpy(["hero", ...NAV_ITEMS.map((item) => item.id)], 100)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-laurel/20 bg-moonlight/90 backdrop-blur-sm">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard rounded-md"
          aria-label="Retour à l'accueil"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.svg"
              alt="Logo de l'Association"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-mustard"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl font-bold text-peacock"
          >
            Association FLAKO
          </motion.span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-mustard relative ${
                activeSection === item.id ? "text-mustard" : "text-peacock"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mustard"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-peacock hover:text-mustard transition-colors"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
        </button>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => window.open("#donation", "_blank")}
        >
          <Heart className="h-4 w-4 mr-2" />
          Faire un don
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-laurel/20 bg-moonlight"
        >
          <nav className="container flex flex-col py-4" aria-label="Navigation mobile">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-2.5 text-left text-sm font-medium ${
                  activeSection === item.id ? "text-mustard" : "text-peacock"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="mt-4 w-full sm:w-auto"
              onClick={() => window.open("#donation", "_blank")}
            >
              <Heart className="h-4 w-4 mr-2" />
              Faire un don
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
