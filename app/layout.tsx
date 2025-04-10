import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Association FLAKO",
  description: "Site officiel de l'Association - Ensemble, créons un impact durable",
  keywords: ["association", "bénévolat", "impact social", "communauté"],
  authors: [{ name: "Association FLAKO" }],
  openGraph: {
    title: "Association KLAKO",
    description: "Ensemble, créons un impact durable",
    url: "https://www.association.org",
    siteName: "Association FLAKO",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#3A7D89" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'