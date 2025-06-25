import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useInView } from 'react-intersection-observer'
import { services } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'
import Button from '@/components/ui/Button'

const Services: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative flex min-h-[60vh] items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Architectural blueprints"
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
              Our Services
            </h1>
            
            <p className="mt-6 text-lg text-gray-200">
              We offer comprehensive architectural and design services tailored to your unique vision and requirements.
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>
      
      {/* Process Section */}
      <section ref={processRef} className="py-20 md:py-32 bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Our Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We follow a structured approach to ensure every project is delivered with excellence.
            </p>
          </motion.div>
          
          <div className="relative mt-16">
            {/* Process Timeline */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
            
            {/* Process Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="font-serif font-bold">01</span>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="md:text-right">
                    <h3 className="font-serif text-2xl font-semibold">Discovery & Briefing</h3>
                    <p className="mt-3 text-muted-foreground">
                      We begin by understanding your vision, requirements, constraints, and aspirations through in-depth consultations.
                    </p>
                  </div>
                  <div></div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="font-serif font-bold">02</span>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div></div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">Concept Development</h3>
                    <p className="mt-3 text-muted-foreground">
                      We create initial design concepts that explore different approaches to meeting your objectives, presenting sketches, diagrams, and 3D visualizations.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="font-serif font-bold">03</span>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="md:text-right">
                    <h3 className="font-serif text-2xl font-semibold">Design Development</h3>
                    <p className="mt-3 text-muted-foreground">
                      We refine the chosen concept, developing detailed plans, elevations, sections, and material specifications to bring your vision to life.
                    </p>
                  </div>
                  <div></div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="font-serif font-bold">04</span>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div></div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">Documentation & Approvals</h3>
                    <p className="mt-3 text-muted-foreground">
                      We prepare comprehensive technical drawings and documentation for permitting, regulatory approvals, and construction, ensuring compliance with all relevant codes.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="font-serif font-bold">05</span>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="md:text-right">
                    <h3 className="font-serif text-2xl font-semibold">Construction & Implementation</h3>
                    <p className="mt-3 text-muted-foreground">
                      We provide construction administration services, working closely with contractors to ensure the design is executed according to specifications and quality standards.
                    </p>
                  </div>
                  <div></div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="rounded-lg bg-primary/5 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Contact us today to schedule a consultation and learn how our services can bring your architectural vision to life.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services