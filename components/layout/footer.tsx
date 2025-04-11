"use client"

import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { SocialIcon } from "@/components/ui/social-icon"

export default function Footer() {
  return (
    <footer className="w-full border-t border-laurel/20 bg-peacock text-moonlight py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Logo de l'Association"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full bg-mustard"
          />
          <span className="text-lg font-bold">Association FLOKA</span>
        </div>
        <p className="text-sm text-moonlight/80">© {new Date().getFullYear()} Association FLOKA. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <SocialIcon href="https://instagram.com/ong" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
          <SocialIcon href="https://facebook.com/ong" icon={<Facebook className="h-4 w-4" />} label="Facebook" />
          <SocialIcon href="https://linkedin.com/company/ong" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
        </div>
      </div>
    </footer>
  )
}
