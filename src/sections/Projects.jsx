import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi'

// Filter categories
const filters = ['All', 'Frontend', 'Full-Stack']

// Projects Data
const projects = [
  {
    title: '🚀 Career_Guidance',
    desc: '🌟 Career_Guidance is a comprehensive platform designed to assist students in making informed career choices through personalized guidance and resources.',
    tech: ['React', 'API Handling', 'Node.js', 'Tailwind','Firebase','Chart.js'],
    category: 'Full-Stack',
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQEANbg8S52I2A/feedshare-shrink_480/B56ZlwdF7FG0AY-/0/1758528300548?e=1764201600&v=beta&t=hooTmhJl6X0rmwNvIXv3i_05-BakJNeKPjX6_IXm7As',
      'https://media.licdn.com/dms/image/v2/D5622AQEU7NeWUX0GfQ/feedshare-shrink_480/B56ZlwdF8FKEAY-/0/1758528300766?e=1764201600&v=beta&t=nU6cfRNKuy0dlx_w7Im_vJz7tV-r9EHNPx4TkKZUXyM',
    ],
    demo: 'https://carrier-guidance-oc36.onrender.com/',
    github: 'https://github.com/Developer-Rushikesh/career_guidance',
    featured: true,
  },
  {
    title: '🪄 Cinema-Spot',
    desc: '🍿 Cinema-Spot is your ultimate movie companion app, offering personalized recommendations, showtimes, and trailers all in one place.',
    tech: ['React.js', 'API Integration', 'Tailwind','TypeScript','Vite','Lucide Icon'],
    category: 'Frontend',
    images: [
      'https://media.licdn.com/dms/image/v2/D4E22AQEnmcTtyOAg-Q/feedshare-shrink_2048_1536/B4EZjXWlzMGwAw-/0/1755959874001?e=1764201600&v=beta&t=alDvY4F-UFihisZBmAGG9rCznG-Sv3HZJGKuMJR7jvo',
    ],
    demo: '#',
    github: 'https://github.com/Developer-Rushikesh/Cinema-Spot',
  },
  {
    title: '📊 Farmconnect',
    desc: '🌾 Legendary Farmconnect connects local farmers with buyers instantly.',
    tech: ['React', 'Rest-API', 'Tailwind','Firebase','Authentication'],
    category: 'Full-Stack',
    images: [
      'https://media.licdn.com/dms/image/v2/D4E22AQHZ4OLVcFI6fQ/feedshare-shrink_2048_1536/B4EZl8qoOVIIAw-/0/1758733348630?e=1764201600&v=beta&t=0L1KRgNt2gpE9Y8X2mE-JogdGveMiy4DS-ur1UVBDcg',
    ],
    demo: 'https://legendary-farmconnect-e06857.netlify.app/',
    github: 'https://github.com/Developer-Rushikesh/FarmConnect',
  },
  {
    title: '💻 My Portfolio Web',
    desc: '🎨 This portfolio website showcases my skills as a frontend developer using React, Tailwind CSS, and Storybook for component development.',
    tech: ['React', 'Tailwind', 'Responsive Design', 'Framer Motion','icons'],
    category: 'Frontend',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    ],
    demo: '#',
    github: '#',
  },
]

// Project Card Component
function ProjectCard({ project, index, featured }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-slate-800/40 border border-slate-700/40 rounded-xl overflow-hidden shadow-soft hover:-translate-y-1 transition ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="relative aspect-video overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="p-5 text-center sm:text-center">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-slate-300 text-sm">{project.desc}</p>

        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-slate-300">
          {project.tech.map((t) => (
            <span key={t} className="rounded bg-slate-700/40 px-2 py-1">
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 sm:flex-none justify-center"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 sm:flex-none justify-center"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

// Main Projects Component
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const featured = filteredProjects.find((p) => p.featured)
  const rest = filteredProjects.filter((p) => !p.featured)

  return (
    <div className="relative py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader
          title="🧩 Projects"
          subtitle="A selection of things I've built recently"
        />

        {/* Filter Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeFilter === f
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {featured && (
          <div className="mt-10 grid gap-6 justify-center lg:grid-cols-2">
            <ProjectCard project={featured} index={0} featured />
          </div>
        )}

        {/* Other Projects */}
        <div className="mt-10 grid gap-6 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
