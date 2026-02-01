import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Association FLOKA",
  description: "Site officiel de l'Association - Ensemble, créons un impact durable",
  keywords: ["association", "bénévolat", "impact social", "communauté"],
  authors: [{ name: "Association FLOKA" }],
  openGraph: {
    title: "Association FLOKA",
    description: "Ensemble, créons un impact durable",
    url: "https://floka.vercel.app",
    siteName: "Association FLOKA",
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
        {/* SVG favicon for modern browsers */}
        <link rel="icon" href="/images/logo.jpg" type="image/svg+xml" />
        {/* Fallbacks for older browsers / platforms */}
        <link rel="shortcut icon" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg " />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'