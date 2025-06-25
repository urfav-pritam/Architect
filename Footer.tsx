import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'
import Container from '../ui/Container'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background border-t border-border">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <span className="text-xl font-serif font-bold tracking-tight">ARCHIFORM</span>
              </Link>
              <p className="mb-6 text-muted-foreground">
                Creating innovative architectural solutions that blend form, function, and sustainability.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-foreground/5 p-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-foreground/5 p-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-foreground/5 p-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-serif font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-serif font-semibold">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Architectural Design
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Urban Planning
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Sustainable Design
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-lg font-serif font-semibold">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    123 Architecture Ave<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
                  <a href="tel:+12125551234" className="text-muted-foreground hover:text-primary transition-colors">
                    (212) 555-1234
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                  <a href="mailto:info@archiform.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@archiform.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Archiform. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer