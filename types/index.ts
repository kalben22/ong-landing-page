import type React from "react"

export interface SocialLink {
  platform: "instagram" | "facebook" | "linkedin" | "twitter"
  url: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

export interface HistoireSection {
  id: number
  title: string
  content: string[]
  image: string
  imageAlt: string
}

export interface Value {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export interface Action {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  link?: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  socialLinks: SocialLink[]
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}
