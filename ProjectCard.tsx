import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-background"
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-serif font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-200">{project.category}</p>
        <Link 
          to={`/projects/${project.id}`} 
          className="mt-4 inline-flex items-center text-sm font-medium text-white hover:underline"
        >
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.category}</p>
      </div>
    </motion.div>
  )
}

export default ProjectCard