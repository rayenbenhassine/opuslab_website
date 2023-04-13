import { ReactNode } from 'react'

export interface Course {
  title: string
  items: Array<string>
}

export interface CardContent {
  title: string
  description: string
  icon: ReactNode
  iconBg: string
}

export interface Objectif {
  title: string
  description: string
}

export interface TrainingCollectionAttributes {
  label: string
  description: string
  duration: number
  Salary: number
  courses: Array<Course>
  objectifs: Array<Objectif>
  schedule: string
  mode: string
  subDescription: string
  person: string
  pathName: string
}

export interface TrainingCollection {
  id: number
  attributes: TrainingCollectionAttributes
}

export interface OpusBusinessForm {
  fullName: string
  company: string
  skills: string
  needs: string
}

export interface InstructorForm {
  fullName: string
  email: string
  domain: string
  file: string
  message: string
}

export interface NewsLetterForm {
  email: string
}

export interface ContactForm {
  fullName: string
  email: string
  object: string
  message: string
}
