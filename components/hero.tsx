"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDownCircle, Download, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Harsh Sharma
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack {" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Developer
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I build exceptional digital experiences with modern technologies. Passionate about creating responsive,
              user-friendly applications that solve real-world problems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >

              <Link
                href="https://drive.google.com/file/d/1YyTWJFB9nj1f_W7OuLXnTHRPgi71Bu8o/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-white font-medium rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md"
              >
                <Download className="mr-2 h-4 w-4" />
                 Resume
              </Link>

              {/* <a href="mailto:harshsharma17122005@gmail.com">
                <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </a> */}

            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-20 animate-pulse" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30">
                <Image
                  src="/assets/profile-pic.jpg"
                  alt="Profile"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDownCircle className="w-10 h-10 text-purple-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
    </section>
  )
}
