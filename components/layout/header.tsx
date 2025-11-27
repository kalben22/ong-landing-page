"use client"

import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { NAV_ITEMS } from "@/lib/constants"

// ...existing code...
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
      <div className="container relative flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        {/* Brand: centered on mobile, normal flow on md+ */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard rounded-md z-10 md:static md:visible visible"
          aria-label="Retour à l'accueil"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Logo de l'Association"
              width={40}
              height={40}
              className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-mustard"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-base font-bold text-peacock"
          >
            Association FLOKA
          </motion.span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 ml-auto md:ml-0" aria-label="Navigation principale">
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

        {/* Right actions (menu + CTA) */}
        <div className="ml-auto flex items-center gap-3 z-20">
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

          {/* CTA Button: hidden on very small screens to avoid overlap (appears from sm/md) */}
          <a
            href="https://www.helloasso.com/associations/association-floka/formulaires/1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Heart className="h-4 w-4 mr-2" />
              Faire un don
            </Button>
          </a>
        </div>
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
            <a href="https://www.helloasso.com/associations/association-floka/formulaires/1" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <Heart className="h-4 w-4 mr-2" />
                Faire un don
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
// ...existing code...