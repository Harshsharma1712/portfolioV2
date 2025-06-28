import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Hero />
        <Projects />
        <TechStack />
        <Footer />
        <Contact />
      </main>
    </>

  )
}
