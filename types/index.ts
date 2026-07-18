// Portfolio Types
export interface NavItem {
  id: string
  label: string
  href: string
}

export interface Skill {
  name: string
  icon: string
  color: string
}

export interface SkillCategory {
  id: string
  label: string
  skills: Skill[]
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  tech: string[]
  type: 'current' | 'past'
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface ContactLink {
  icon: string
  label: string
  value: string
  href: string
}
