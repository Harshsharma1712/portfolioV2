"use client"
import { Twitter } from "lucide-react";

export default function Contact() {

  return (
     <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-gray-400 mb-6">
          Want to chat? Just shoot me a DM with a direct question on X (Twitter)
          and I'll respond whenever I can. I will ignore all soliciting.
        </p>
        <a
          href="https://x.com/sharmahs017" // Replace with your actual X username
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl transition-all duration-300"
        >
          <Twitter className="text-xl" />
          Message on X
        </a>
      </div>
    </div>
  )
}
