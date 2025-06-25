import React from 'react'
import { Service } from '@/types'
import { 
  Building2, 
  PenTool, 
  HomeIcon, 
  TreePine, 
  Building, 
  Lightbulb 
} from 'lucide-react'

export const services: Service[] = [
  {
    title: 'Architectural Design',
    description: 'We create innovative, functional, and aesthetically pleasing architectural designs tailored to your specific needs and vision.',
    features: [
      'Concept Development',
      'Schematic Design',
      'Design Development',
      'Construction Documentation',
      'Bidding and Negotiation',
      'Construction Administration'
    ],
    icon: Building2
  },
  {
    title: 'Interior Design',
    description: 'Our interior design services transform spaces into beautiful, functional environments that reflect your style and meet your needs.',
    features: [
      'Space Planning',
      'Material Selection',
      'Custom Furniture Design',
      'Lighting Design',
      'Color Consultation',
      'Art and Accessory Curation'
    ],
    icon: PenTool
  },
  {
    title: 'Residential Architecture',
    description: 'We design homes that balance beauty, functionality, and sustainability, creating spaces that enhance daily living.',
    features: [
      'Custom Home Design',
      'Renovations and Additions',
      'Historic Preservation',
      'Multi-family Housing',
      'Sustainable Home Design',
      'Site Analysis and Planning'
    ],
    icon: HomeIcon
  },
  {
    title: 'Landscape Architecture',
    description: 'Our landscape architecture services create outdoor spaces that complement buildings and enhance the natural environment.',
    features: [
      'Site Planning',
      'Garden Design',
      'Outdoor Living Spaces',
      'Sustainable Landscaping',
      'Water Features',
      'Hardscape Design'
    ],
    icon: TreePine
  },
  {
    title: 'Commercial Architecture',
    description: 'We design commercial spaces that support business objectives, enhance productivity, and create memorable experiences.',
    features: [
      'Office Buildings',
      'Retail Spaces',
      'Hospitality Projects',
      'Mixed-Use Developments',
      'Adaptive Reuse',
      'Workplace Strategy'
    ],
    icon: Building
  },
  {
    title: 'Sustainable Design',
    description: 'Our sustainable design approach creates environmentally responsible buildings that conserve resources and promote wellbeing.',
    features: [
      'LEED Certification Consulting',
      'Energy Modeling',
      'Passive Design Strategies',
      'Renewable Energy Integration',
      'Sustainable Material Selection',
      'Water Conservation Systems'
    ],
    icon: Lightbulb
  }
]