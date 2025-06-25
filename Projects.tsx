import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

const Projects: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [filter, setFilter] = useState<string>('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category.toLowerCase())))]
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase() === filter))
    }
  }, [filter])

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative flex min-h-[60vh] items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            alt="Architecture portfolio"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Our Projects
            </h1>
            
            <p className="mt-6 text-lg text-gray-200">
              Explore our portfolio of award-winning designs, innovative solutions, and transformative spaces.
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export default Projects