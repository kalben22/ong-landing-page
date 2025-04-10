"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeading } from "@/components/ui/section-heading"
import { ContactForm } from "@/components/ui/contact-form"
import { ContactInfo } from "@/components/ui/contact-info"
import { SocialIcon } from "@/components/ui/social-icon"
import { CONTACT_INFO } from "@/lib/constants"

function ContactComponent() {
  const socialIcons = {
    instagram: <Instagram className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
  }
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-peacock/5" aria-labelledby="contact-title">
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionHeading
              badge="Rejoignez-nous"
              badgeColor="mustard"
              title="Nous Rejoindre"
              description="Vous souhaitez nous rejoindre ou nous soutenir ? Contactez-nous !"
              id="contact-title"
            />

            <ContactInfo phone={CONTACT_INFO.phone} email={CONTACT_INFO.email} address={CONTACT_INFO.address} />

            <div className="flex space-x-4 pt-4">
              {CONTACT_INFO.socialLinks.map((link) => (
                <SocialIcon
                  key={link.platform}
                  href={link.url}
                  icon={socialIcons[link.platform]}
                  label={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                  variant
                  label={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                  variant="large"
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl bg-moonlight p-6 shadow-md border border-laurel/20"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-mustard rounded-full opacity-20"></div>
            <ContactForm />
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  )
}
// Mémoisation du composant pour éviter les re-rendus inutiles
export default memo(ContactComponent)
