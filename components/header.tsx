"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Portfolio
          </Link>
        </motion.div>

        <nav>
          <ul className="flex space-x-8">
            {["Home", "Projects", "Tech Stack", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
