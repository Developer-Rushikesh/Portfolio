// … other imports …
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'

const titles = ['React Developer', 'Full-Stack Enthusiast']

export function Hero({ mounted }) {
  const [index, setIndex] = useState(0)
  const [hoveringDownload, setHoveringDownload] = useState(false)

  useEffect(() => {
    if (!mounted) return
    const id = setInterval(() => setIndex(i => (i + 1) % titles.length), 2200)
    return () => clearInterval(id)
  }, [mounted])

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Hi, I’m <span className="text-primary">RUSHIKESH</span>
        </motion.h1>

        {/* Rotating Titles */}
        <div className="mt-3 h-8 sm:h-10 text-base sm:text-lg md:text-xl text-slate-300 font-medium">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="inline-block"
            >
              🚀 {titles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Badge */}
        <div className="mt-3 inline-block bg-primary/10 text-primary text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 rounded-full">
          🎯 Currently learning: <span className="font-semibold">Spring Boot</span> | Open to: Full-Stack Internships
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
        >
          I’m a passionate fresher developer specializing in full-stack web development.
          I love crafting clean, modern, and responsive web applications using React,
          Java Spring Boot, MongoDB, and SQL. 💡 Always eager to learn, collaborate, and grow — 
          I aim to build digital experiences that make an impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
        >
          <ScrollLink
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Hire Me <FiArrowRight />
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth
            offset={-80}
            duration={500}
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            View Projects
          </ScrollLink>

          {/* Download CV with tooltip */}
          <div className="relative w-full sm:w-auto">
            <a
              href="/Rushis_Resume.pdf"
              download="Rushis_Resume.pdf"
              className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
              onMouseEnter={() => setHoveringDownload(true)}
              onMouseLeave={() => setHoveringDownload(false)}
            >
              <FiDownload /> Download CV
            </a>

            <AnimatePresence>
              {hoveringDownload && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap"
                >
                  Download Resume
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex justify-center lg:justify-start gap-5 text-xl sm:text-2xl md:text-3xl text-slate-300"
        >
          <a
            href="https://github.com/Developer-Rushikesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rushikesh-pawar-6252432b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FiLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-soft mb-8 lg:mb-0"
      >
        <div className="relative w-full h-full">
          <img
            src="https://avatars.githubusercontent.com/u/213608992?s=400&u=80f0c572feb6ff923bba6913102d85bf999f5d1c&v=4"
            alt="Profile"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300 rounded-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
