"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Mail, Linkedin, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:hello@example.com" className="hover:text-purple-400 transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    github.com/johndoe
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <Twitter className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Twitter</p>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    twitter.com/johndoe
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
    </section>
  )
}
