import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useInView } from 'react-intersection-observer'
import { team } from '@/data/team'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [teamRef, teamInView] = useInView({
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
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Modern architecture office"
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
              About Archiform
            </h1>
            
            <p className="mt-6 text-lg text-gray-200">
              We are a team of passionate architects and designers dedicated to creating exceptional spaces that inspire and elevate the human experience.
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              ref={missionRef}
            >
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Founded in 2005 by award-winning architect Elizabeth Chen, Archiform began as a small design studio with a vision to create architecture that harmoniously blends form, function, and sustainability.
                </p>
                <p>
                  Over the years, we've grown into a full-service architectural firm with a diverse team of architects, designers, and engineers. Our collaborative approach and commitment to excellence have earned us a reputation for creating innovative spaces that exceed client expectations.
                </p>
                <p>
                  Today, Archiform is recognized as a leader in sustainable design and innovative architectural solutions. We've completed over 250 projects across residential, commercial, cultural, and public sectors, earning numerous awards and recognition for our work.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg bg-primary/10 md:-left-6 md:-top-6 md:h-32 md:w-32"></div>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                alt="Our studio"
                className="relative z-10 h-full w-full rounded-lg object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 md:py-32 bg-muted/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              These core principles guide our approach to every project and interaction.
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="font-serif text-xl font-bold text-primary">01</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creativity and forward-thinking approaches to solve complex design challenges.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="font-serif text-xl font-bold text-primary">02</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                We design with environmental responsibility and long-term impact in mind.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="font-serif text-xl font-bold text-primary">03</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of diverse perspectives and collaborative problem-solving.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="font-serif text-xl font-bold text-primary">04</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to the highest standards of quality and craftsmanship in everything we do.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Team Section */}
      <section ref={teamRef} className="py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Meet the talented individuals who lead our firm with vision, expertise, and passion.
            </p>
          </motion.div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 4).map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default About