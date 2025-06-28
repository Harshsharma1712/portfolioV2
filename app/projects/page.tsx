"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Reels App",
    description: "A full-stack Reels App built with Next.js to demonstrate seamless handling and streaming of video data using ImageKit, along with MongoDB for database storage and NextAuth.js for secure authentication.",
    image: "/assets/reels-app.png",
    tags: ["Next.js", "Next-Auth", "MongoDB", "ImageKit", "shadcn"],
    liveUrl: "https://reels-app-rouge.vercel.app/",
    githubUrl: "https://github.com/Harshsharma1712/reels-app",
  },
  {
    id: 2,
    title: "Clam-Stress",
    description: "Clam-Stress is a calming and supportive web application designed to help people going through difficult times. Whether you're feeling stressed, anxious, or just bored, this app offers soothing visuals, interactive games, and friendly conversations powered by AI to help you feel better and more grounded.",
    image: "/assets/clam-stress.png",
    tags: ["Next.js", "Gemini API", "Shadcn", "Framer"],
    liveUrl: "https://clam-stress.vercel.app/",
    githubUrl: "https://github.com/Harshsharma1712/Clam-Stress",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A modern and efficient Task Management Application built using Next.js, Clerk, Neon PostgreSQL, Drizzle ORM, and ShadCN/UI.",
    image: "/assets/task-manager.png",
    tags: ["Next.js", "Neon Postgres", "Drizzle", "Shadcn", "Clerk"],
    liveUrl: "https://task-manager-three-bice-75.vercel.app/",
    githubUrl: "https://github.com/Harshsharma1712/task-manager",
  },
  {
    id: 4,
    title: "Gemini Model",
    description: "Utilize Gemini API and test various capabilities like text Generation, Image Generation.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Google GenAI", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harshsharma1712/Gemini-Model-test",
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden group">
        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={project.image || "/placeholder.svg?height=600&width=800"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay with buttons - Fixed z-index and pointer events */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 text-black hover:bg-white z-10"
              onClick={(e) => {
                e.preventDefault()
                window.open(project.liveUrl, "_blank", "noopener,noreferrer")
              }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>

            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 text-black hover:bg-white z-10"
              onClick={(e) => {
                e.preventDefault()
                window.open(project.githubUrl, "_blank", "noopener,noreferrer")
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  )
}
