import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from './components/Navbar'
import { SectionWrapper } from './components/SectionWrapper'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Certifications } from './sections/Certifications'
import { Achievements } from './sections/Achievements'

function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' })
    setMounted(true)
  }, [])

  return (
    <div className="bg-background text-text">
      <Navbar />
      <main className="container-responsive">
        <section id="home" className="pt-28 sm:pt-32">
          <Hero mounted={mounted} />
        </section>

        <SectionWrapper id="about" direction="left" className="py-20">
          <About />
        </SectionWrapper>

        <SectionWrapper id="experience" direction="right" className="py-20">
          <Experience />
        </SectionWrapper>

        <SectionWrapper id="skills" direction="front" className="py-20">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projects" direction="back" className="py-20">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="certifications" direction="back" className="py-20">
          <Certifications />
        </SectionWrapper>

         <SectionWrapper id="Achievements" direction="back" className="py-20">
          <Achievements />
        </SectionWrapper>


        <SectionWrapper id="contact" direction="right" className="py-20">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}

export default App
