import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
    </>
  )
}

export default Home