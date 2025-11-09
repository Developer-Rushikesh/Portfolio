import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="bg-slate-900 py-8 mt-12 border-t border-slate-700/40">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-300">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="/YourName_CV.pdf" download className="hover:text-primary transition">Resume</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-2xl text-slate-300">
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
        </div>
      </div>

      {/* Optional Built With Line */}
      <p className="mt-6 text-center text-slate-500 text-sm">
        Built with ❤️ using React & TailwindCSS — © {new Date().getFullYear()} Rushikesh Pawar
      </p>
    </footer>
  )
}
