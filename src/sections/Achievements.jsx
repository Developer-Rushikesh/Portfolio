import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { FiAward, FiUsers, FiCode } from 'react-icons/fi'
import { useState } from 'react'

const achievements = [
  {
    icon: <FiAward className="text-primary text-2xl" />,
    title: '🎉 Foundations Round – CodeClash August Arena',
    desc: 'Successfully participated in the Foundations Round (MCQ) of CodeClash: The August Arena, organized by the Lets Code Community! 🚀',
  },
  {
    icon: <FiAward className="text-primary text-2xl" />,
    title: '🎉 Hacknovate 2k25 Participation',
    desc: 'Actively participated in Hacknovate 2k25, a competitive coding and innovation event held at Karmaveer Bhaurao Patil College of Engineering, Satara, on 20th June 2025.',
  },
  {
    icon: <FiAward className="text-primary text-2xl" />,
    title: '📜 Bizquezt #21 – Certificate of Participation',
    desc: 'Participated in Bizquezt #21, a strategic business quiz hosted by Naukri Campus. Sharpened business acumen and decision-making skills through engaging competitive rounds.',
    date: 'June 15, 2025',
    organizer: 'Naukri Campus',
    certificateLink: '#', // Replace with actual certificate image link
  },
]

export function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null)

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const handleClose = () => setSelectedCert(null)

  return (
    <div className="relative py-10">
      <SectionHeader
        title="🏅 Achievements & Highlights"
        subtitle="A few things I’m proud of outside my projects"
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <AnimatedSection key={index}>
            <div className="rounded-xl bg-slate-800/40 border border-slate-700/40 p-6 hover:bg-slate-800/60 transition shadow-soft flex flex-col gap-3">
              <div className="flex items-center gap-3">{item.icon}</div>
              <h3 className="text-white font-semibold text-base">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              {item.date && item.organizer && (
                <p className="text-slate-400 text-xs">
                  🗓️ {item.date} | 🏢 {item.organizer}
                </p>
              )}
              {item.certificateLink && (
                <button
                  onClick={() => handleViewCertificate(item)}
                  className="text-primary text-sm hover:underline text-left mt-auto"
                >
                  View Certificate →
                </button>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <div className="bg-slate-900 rounded-lg overflow-hidden max-w-xl w-full">
            <div className="flex justify-between items-center p-2 border-b border-slate-700">
              <h4 className="text-white font-semibold">{selectedCert.title}</h4>
              <button
                className="text-white text-xl font-bold"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              {selectedCert.certificateLink !== '#' ? (
                <img
                  src={selectedCert.certificateLink}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <p className="text-slate-300">Certificate image not available.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
