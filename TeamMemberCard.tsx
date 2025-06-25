import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-background"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex space-x-3">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/20 p-2 hover:bg-white/40">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/20 p-2 hover:bg-white/40">
              <Twitter className="h-4 w-4" />
            </a>
          )}
          <a href={`mailto:${member.email}`} className="rounded-full bg-white/20 p-2 hover:bg-white/40">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{member.position}</p>
      </div>
    </motion.div>
  )
}

export default TeamMemberCard