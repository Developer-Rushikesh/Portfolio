import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub,
  SiSpring, SiPython, SiPostman, SiMongodb, SiPhp, SiMysql
} from 'react-icons/si'
import { FaServer, FaJava } from 'react-icons/fa'
import { motion } from 'framer-motion'

// ------------------ Skill Data ------------------
const skills = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', cat: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500', cat: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', cat: 'Frontend' },
  { name: 'ReactJS', icon: SiReact, color: 'text-cyan-400', cat: 'Frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400', cat: 'Frontend' },

  { name: 'Python', icon: SiPython, color: 'text-yellow-300', cat: 'Backend' },
  { name: 'Java', icon: FaJava, color: 'text-red-500', cat: 'Backend' },
  { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500', cat: 'Backend' },
  { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', cat: 'Backend' },

  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', cat: 'Database' },
  { name: 'SQL', icon: SiMysql, color: 'text-blue-300', cat: 'Database' },
  { name: 'NoSQL', icon: SiMongodb, color: 'text-green-300', cat: 'Database' },

  { name: 'Postman', icon: SiPostman, color: 'text-orange-400', cat: 'Tools' },
  { name: 'XAMPP', icon: FaServer, color: 'text-blue-400', cat: 'Tools' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-300', cat: 'Tools' },
]


const languages = [
  { name: 'Hindi', flag: '🇮🇳', level: 'Native' },
  { name: 'English', flag: '🇬🇧', level: 'Fluent' },
  { name: 'Marathi', flag: '🇮🇳', level: 'Native' },
]

const proficiencies = [
  { label: 'Frontend Development', value: 85 },
  { label: 'Backend Development', value: 75 },
  { label: 'Database Management', value: 80 },
]

const softSkills = [
  'Teamwork',
  'Problem Solving',
  'Communication',
  'Time Management',
  'Adaptability',
  'Attention to Detail'
]

// ------------------ Animation Variants ------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// ------------------ Component ------------------
export function Skills() {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools']

  return (
    <section id="skills" className="py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title text-white text-3xl font-bold text-center"
      >
        Skills
      </motion.h2>

      <p className="mt-2 section-subtitle text-center text-slate-400">
        Technologies and tools I work with
      </p>

      {/* Skill Categories */}
      {categories.map((cat) => (
        <motion.div key={cat} className="mt-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm uppercase tracking-wide text-slate-400">{cat}</span>
            <span className="h-px w-24 bg-slate-700/60" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.filter(s => s.cat === cat).map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="group relative rounded-xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-slate-700/40 p-4 sm:p-6 text-center shadow-soft overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-primary/10 to-transparent" />
                
                {/* Icon + Tooltip */}
                <div className="relative flex justify-center">
                  <Icon
                    title={name}
                    aria-label={name}
                    className={`relative text-3xl sm:text-4xl ${color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition text-slate-200">
                    {name}
                  </span>
                </div>

                <p className="relative mt-3 text-xs sm:text-sm text-slate-300">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Languages */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-white mb-4">🌐 Languages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl bg-slate-800/40 border border-slate-700/40 p-4 flex items-center justify-between hover:bg-slate-800/60 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-slate-300 font-medium">{lang.name}</span>
              </div>
              <span className="text-xs text-slate-400">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-white mb-4">🗣️ Soft Skills</h3>
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-300 text-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {softSkills.map((skill) => (
            <motion.li
              key={skill}
              variants={itemVariants}
              className="bg-slate-800/40 border border-slate-700/40 rounded-lg py-3 text-center hover:bg-slate-800/70 transition"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
