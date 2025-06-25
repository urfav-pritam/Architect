import React from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useInView } from 'react-intersection-observer'
import ContactForm from '@/components/ui/ContactForm'
import Map, { Marker } from 'react-map-gl'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative flex min-h-[60vh] items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Modern office interior"
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
              Contact Us
            </h1>
            
            <p className="mt-6 text-lg text-gray-200">
              Have a project in mind? Get in touch with our team to discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Contact Section */}
      <section ref={contentRef} className="py-20 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="font-serif text-3xl font-semibold">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                We'd love to hear from you. Fill out the form below, and our team will get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col"
            >
              <h2 className="font-serif text-3xl font-semibold">Contact Information</h2>
              <p className="mt-4 text-muted-foreground">
                Visit our office, give us a call, or send us an email. We're always happy to hear from you.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="mt-1 text-muted-foreground">
                      123 Architecture Ave<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="tel:+12125551234" className="hover:text-primary transition-colors">
                        (212) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="mailto:info@archiform.com" className="hover:text-primary transition-colors">
                        info@archiform.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="mt-1 text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: By appointment only<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 h-80 flex-1 overflow-hidden rounded-lg">
                {mapboxToken ? (
                  <Map
                    initialViewState={{
                      longitude: -74.006,
                      latitude: 40.7128,
                      zoom: 13
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="mapbox://styles/mapbox/light-v11"
                    mapboxAccessToken={mapboxToken}
                  >
                    <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
                      <MapPin className="h-8 w-8 text-primary" />
                    </Marker>
                  </Map>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Map unavailable</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact