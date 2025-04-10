"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts and preferences.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
    </section>
  )
}

// Define the Project interface
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

function ProjectCard( { project, index }: {project: Project; index: number} ) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div animate={isHovered ? { scale: 1.1 } : { scale: 1 }} transition={{ duration: 0.4 }}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 w-full flex justify-between">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live
              </a>
            </Button>

            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
