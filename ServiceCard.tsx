import React from 'react'
import { motion } from 'framer-motion'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-lg border border-border p-6 transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <service.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold">{service.title}</h3>
      <p className="mb-4 text-muted-foreground">{service.description}</p>
      <ul className="mt-auto space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard