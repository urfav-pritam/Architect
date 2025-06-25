import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, User, Tag } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { Project } from '@/types'
import ProjectCard from '@/components/ui/ProjectCard'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])
  
  useEffect(() => {
    // Find the project
    const foundProject = projects.find(p => p.id === id)
    setProject(foundProject || null)
    
    // Find related projects (same category, excluding current)
    if (foundProject) {
      const related = projects
        .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
        .slice(0, 3)
      setRelatedProjects(related)
    }
    
    // Scroll to top
    window.scrollTo(0, 0)
  }, [id])
  
  if (!project) {
    return (
      <Container className="py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
        <Button href="/projects" variant="outline" className="mt-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Container>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <Container className="relative z-10 mt-32">
          <Link 
            to="/projects" 
            className="mb-6 inline-flex items-center text-sm font-medium text-white hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:max-w-4xl"
          >
            {project.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-white/80"
          >
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <span>{project.category}</span>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Project Details */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl font-semibold">Project Overview</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {project.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {project.challenges && (
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-semibold">Challenges & Solutions</h3>
                  <div className="mt-4 space-y-4 text-muted-foreground">
                    {project.challenges.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-semibold">Project Details</h3>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Client</dt>
                  <dd className="mt-1">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                  <dd className="mt-1">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Year</dt>
                  <dd className="mt-1">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Size</dt>
                  <dd className="mt-1">{project.size}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Category</dt>
                  <dd className="mt-1">{project.category}</dd>
                </div>
                {project.awards && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Awards</dt>
                    <dd className="mt-1">{project.awards}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Project Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-12 md:py-20 bg-muted/30">
          <Container>
            <h2 className="mb-8 font-serif text-2xl font-semibold">Project Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${project.title} - Gallery Image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-32">
          <Container>
            <h2 className="mb-12 font-serif text-2xl font-semibold">Related Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </Container>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Contact us today to schedule a consultation and learn how we can bring your vision to life.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProjectDetail