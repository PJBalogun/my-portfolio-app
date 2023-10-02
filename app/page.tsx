import Image from 'next/image'
import Hero from "@/components/home/Hero"
import Projects from "@/components/home/Projects"
import Skills from "@/components/home/Skills"
import Testimonials from "@/components/home/Testimonials"
import CTA from "@/components/home/CTA"

export default function Home() {
  return (
    <div>
       <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Testimonials />
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </div>
  )
}


