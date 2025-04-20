import type React from "react"
// Types communs utilisés dans l'application

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

export interface ActionDetail {
  id: number
  title: string
  description: string[]
  icon: React.ReactNode
  link?: string
  coverImage: string
  gallery?: {
    url: string
    alt: string
  }[]
  stats?: {
    value: string
    label: string
  }[]
  testimonials?: {
    quote: string
    name: string
    role: string
    avatar?: string
  }[]
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

export interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
}

export interface Beneficiaire {
  id: number
  name: string
  role: string
  image: string
  testimonial: string
}
