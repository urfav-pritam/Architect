import { LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  title: string
  category: string
  description: string
  challenges?: string
  year: string
  location: string
  client: string
  size: string
  imageUrl: string
  galleryImages?: string[]
  awards?: string
}

export interface Service {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
}

export interface TeamMember {
  name: string
  position: string
  bio: string
  imageUrl: string
  email: string
  linkedin?: string
  twitter?: string
}

export interface NavLink {
  name: string
  path: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: string
}

export interface FormField {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  required: boolean
  pattern?: string
  errorMessage?: string
}