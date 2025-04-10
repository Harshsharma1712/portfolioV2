"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              John Doe
            </Link>
            <p className="text-sm text-gray-400 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
