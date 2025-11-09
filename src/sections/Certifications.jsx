import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { FiBookOpen, FiAward } from 'react-icons/fi'
import { useState } from 'react'

const education = [
  {
    degree: '🎓 B.Tech in Computer Science and Engineering',
    institution: 'Dnyanshree Institute of Engineering and Technology',
    period: '2023 – 2027',
    details: [
      'Graduated with distinction 4 Year',
      'Completed coursework in Data Structures, Algorithms, DBMS, and Web Technologies',
      'Led final-year project: “Smart Attendance System” using React + Spring Boot',
    ],
  },
]

const certifications = [
  {
    name: 'Elite Nmap Hacking (Practice Tests Only)',
    provider: 'Udemy / Haseeb Nasir',
    date: '2024',
    description: '🧠🔐 Successfully completed the course on Network Security.',
    link: 'https://media.licdn.com/dms/image/v2/D4E22AQG4I4rsJ2XxxA/feedshare-shrink_800/B4EZphVJk3IUAg-/0/1762569527541?e=1764201600&v=beta&t=nMILN9E97LZy6qF3ueVyzqSclP5ZIqwL1tdEjFx8E74', // Replace with certificate image link if available
  },
  {
    name: 'IBM SkillsBuild Winter Certification Program',
    provider: 'IBM / CSRBOX',
    date: '2024',
    description: '✨ Data Analytics: Turning Data into Decisions using Python.',
    link: '#',
  },
  {
    name: 'TCS iON Career Edge - IT for Non-IT',
    provider: 'TCS iON',
    date: '2024',
    description: '🎉 Completed the IT for Non-IT certification!',
    link: 'https://media.licdn.com/dms/image/v2/D4E22AQFhH3zzhqTSAw/feedshare-shrink_800/B4EZRLR2GgHEAo-/0/1736429758924?e=1764201600&v=beta&t=uNPIisE0mktSCcieBTlEay5Rj0R-iAtNfA5-nxKme8Y',
  },
]

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const handleClose = () => setSelectedCert(null)

  return (
    <div className="relative py-10">
      <SectionHeader
        title="🎓 Education & Certifications"
        subtitle="Academic background and achievements"
      />

      {/* Education Section */}
      <div className="mt-8 grid gap-6">
        {education.map((edu, idx) => (
          <AnimatedSection key={idx}>
            <div className="rounded-xl bg-slate-800/40 border border-slate-700/40 p-6 hover:bg-slate-800/60 transition">
              <div className="flex items-center gap-3 mb-3">
                <FiBookOpen className="text-primary text-xl" />
                <div>
                  <h3 className="text-white font-semibold">{edu.degree}</h3>
                  <p className="text-slate-400 text-sm">{edu.institution}</p>
                  <p className="text-slate-500 text-xs">{edu.period}</p>
                </div>
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-slate-300 list-disc list-inside">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-10">
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <FiAward className="text-primary text-lg" /> Certifications
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i}>
              <div className="rounded-xl bg-slate-800/40 border border-slate-700/40 p-5 hover:bg-slate-800/60 transition flex flex-col gap-2">
                <h4 className="text-white font-medium">{cert.name}</h4>
                <p className="text-slate-400 text-sm">{cert.provider}</p>
                <p className="text-slate-500 text-xs">{cert.date}</p>
                {cert.description && (
                  <p className="text-slate-300 text-sm">{cert.description}</p>
                )}
                {cert.link && (
                  <button
                    onClick={() => handleViewCertificate(cert)}
                    className="text-primary text-sm hover:underline text-left mt-auto"
                  >
                    View Certificate →
                  </button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <div className="bg-slate-900 rounded-lg overflow-hidden max-w-xl w-full">
            <div className="flex justify-between items-center p-2 border-b border-slate-700">
              <h4 className="text-white font-semibold">{selectedCert.name}</h4>
              <button
                className="text-white text-xl font-bold"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              {selectedCert.link !== '#' ? (
                <img
                  src={selectedCert.link}
                  alt={selectedCert.name}
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <p className="text-slate-300">
                  Certificate image not available.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
