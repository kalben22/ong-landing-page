"use client"

import Hero from "@/components/sections/hero"
import Mission from "@/components/sections/mission"
import Actions from "@/components/sections/actions"
import Beneficiaires from "@/components/sections/beneficiaires"
import Histoire from "@/components/sections/histoire"
import Equipe from "@/components/sections/equipe"
import Contact from "@/components/sections/contact"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-moonlight text-peacock">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Actions />
        <Beneficiaires />
        <Histoire />
        <Equipe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
