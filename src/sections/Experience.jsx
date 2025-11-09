import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'

const experience = [
  {
    company: 'Software Development Internship – Growmore IT Solutions',
    role: 'Full Stack Development Intern',
    period: 'Currently Working (Oct 2025 – Jan 2026)',
    points: [
      'Developed responsive web applications using java,javaFx,css,Xampp,MySql.',
      'Built APIs with  Java for backend services.',
      'Integrated  MySQL for dynamic data management and efficient querying.',
      'Collaborated with senior developers via GitHub to maintain clean, reusable code.',
    ],
  },
  {
    company: 'College – dnyanshree institute of engineering and technology.',
    role: 'B.Tech in Computer Science Engineering',
    period: '2023 – 2027',
    points: [
      'Graduated with distinction.',
      'Completed coursework in Data Structures, Algorithms, DBMS, and Web Technologies.',
      'Developed a “Multiple Projects” using Multiple Languages.',
      'Organized coding sessions for peers and mentored juniors on version control and API testing.',
    ],
  },
]

export function Experience() {
  return (
    <div className="relative py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="💼 Experience" subtitle="Internships • Projects • Education" />
        <div className="mt-8 grid gap-6">
          {experience.map((e) => (
            <AnimatedSection key={e.company}>
              <div className="rounded-xl bg-slate-800/40 border border-slate-700/40 p-6 hover:bg-slate-800/60 transition text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{e.role}</h3>
                    <p className="text-slate-300 text-sm">{e.company}</p>
                  </div>
                  <p className="text-slate-400 text-sm">{e.period}</p>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300 list-disc list-inside text-left">
                  {e.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
