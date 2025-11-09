import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

export function Contact() {
  const [showEmail, setShowEmail] = useState(false)
  const emailRef = useRef(null)

  const toggleEmailPopup = () => setShowEmail(!showEmail)

  // Close email popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        setShowEmail(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div id="contact" className="relative py-12 px-4 sm:px-6">
      <SectionHeader
        title="📬 Contact"
        subtitle="👋 Let’s build something amazing together!"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 max-w-xl mx-auto text-center"
      >
        <p className="text-slate-300 mb-8">
          Feel free to connect with me through any of the platforms below or download my resume.
        </p>

        {/* Social Links + Resume */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-2xl text-slate-300 relative">
          <a
            href="https://github.com/Developer-Rushikesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rushikesh-pawar-6252432b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          {/* Email Icon */}
          <div className="relative" ref={emailRef}>
            <button
              onClick={toggleEmailPopup}
              className="hover:text-primary transition"
              aria-label="Email"
            >
              <FiMail />
            </button>

            {showEmail && (
              <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-sm px-3 py-2 rounded shadow-lg z-10 whitespace-nowrap">
                rushikeshpawar977@gmail.com
              </div>
            )}
          </div>

          <a
            href="/Rushis_Resume.pdf"
            download="Rushis_Resume.pdf"
            className="hover:text-primary transition"
            aria-label="Download Resume"
          >
            <FiDownload />
          </a>
        </div>

        <p className="mt-8 text-slate-500 text-sm">
          © {new Date().getFullYear()} Rushikesh Pawar — Built with ❤️ using React & TailwindCSS
        </p>
      </motion.div>
    </div>
  )
}
