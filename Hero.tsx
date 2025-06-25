import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern architecture"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Innovative Architectural Solutions for Modern Living
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-200 md:text-xl"
          >
            We create spaces that inspire, function flawlessly, and stand the test of time. Our award-winning designs blend aesthetics with sustainability.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/projects" size="lg">
              View Our Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero