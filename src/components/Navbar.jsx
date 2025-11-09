import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setElevated(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when resizing from mobile → desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        elevated ? 'bg-slate-900/70 backdrop-blur-lg shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-white font-heading text-lg sm:text-xl md:text-2xl font-bold"
        >
          <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary/20 text-primary font-bold">
            RP
          </span>
          <span>PORTFOLIO</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((l) => (
            <ScrollLink
              key={l.id}
              to={l.id}
              spy
              smooth
              offset={-80}
              duration={500}
              onSetActive={() => setActive(l.id)}
              className={`relative cursor-pointer text-slate-300 hover:text-white transition-colors duration-200 ${
                active === l.id ? 'text-white' : ''
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary transition-all duration-300" />
              )}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white p-2 rounded hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-900/95 backdrop-blur-md`}
      >
        <div className="flex flex-col px-6 py-3 divide-y divide-white/10">
          {links.map((l) => (
            <ScrollLink
              key={l.id}
              to={l.id}
              spy
              smooth
              offset={-80}
              duration={500}
              onClick={() => setOpen(false)}
              onSetActive={() => setActive(l.id)}
              className={`py-3 text-slate-200 hover:text-white cursor-pointer transition ${
                active === l.id ? 'text-white font-medium' : ''
              }`}
            >
              {l.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
