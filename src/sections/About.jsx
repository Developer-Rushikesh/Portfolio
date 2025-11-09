export function About() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8"
    >
      {/* Header */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          💫 About Me
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
          I'm an enthusiastic full-stack developer who enjoys turning ideas into reality through
          code. With hands-on experience in React, Spring Boot, and modern database technologies, I
          focus on building scalable, user-friendly web applications that make an impact.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {[
          { value: '1', label: 'Internship' },
          { value: '04', label: 'Projects' },
          { value: 'Fresher', label: 'Status' },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-slate-800/40 border border-slate-700/40 p-5 text-center hover:scale-105 transition-transform duration-300"
          >
            <p className="text-2xl sm:text-3xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Journey */}
      <div className="mt-10">
        <p className="text-slate-300 text-sm font-medium uppercase tracking-wide">
          My Journey:
        </p>
        <div className="mt-3 border-l border-slate-700 pl-4 space-y-5 text-slate-400 text-sm sm:text-base leading-relaxed">
          <div>
            <p>
              <span className="text-primary font-semibold">🌱 How I Started:</span> I began coding in
              college by experimenting with small Java programs and quickly fell in love with the
              problem-solving aspect of development.
            </p>
          </div>
          <div>
            <p>
              <span className="text-primary font-semibold">🚀 What I’ve Built:</span> Over time, I’ve
              worked on full-stack projects including React web apps, Spring Boot APIs, and
              database-driven dashboards — focusing on clean UI and efficient backends.
            </p>
          </div>
          <div>
            <p>
              <span className="text-primary font-semibold">🎯 Where I’m Heading:</span> I’m eager to
              join a collaborative team where I can grow as a full-stack developer and contribute to
              impactful, user-centric products.
            </p>
          </div>
        </div>
      </div>

      {/* Core Focus */}
      <div className="mt-10">
        <p className="text-slate-300 text-sm font-medium uppercase tracking-wide">
          Core Focus:
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-slate-300 text-sm sm:text-base list-disc list-inside">
          <li>✅ Full-stack development with React, Java, and Spring Boot</li>
          <li>✅ Database design & management (SQL & NoSQL)</li>
          <li>✅ API development & testing (Postman)</li>
          <li>✅ Version control with Git & GitHub</li>
        </ul>
      </div>

      {/* Fun Fact */}
      <div className="mt-8 text-slate-400 text-sm sm:text-base italic">
        💡 <span className="text-slate-300 font-medium">Fun fact:</span> I started coding by building
        a small to-do app for my college friends to track their assignments — it’s what got me
        hooked!
      </div>

      {/* Resume Button */}
      <div className="mt-10 text-center md:text-left">
        <a
          href="/Rushis_Resume.pdf"
          download="Rushis_Resume.pdf"
          className="btn-primary inline-flex items-center justify-center"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
