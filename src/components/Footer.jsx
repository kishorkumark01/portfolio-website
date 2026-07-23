import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-white/10 py-10">
      <div className="container-px max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display font-bold text-lg">
          Kishor<span className="gradient-text">Kumar</span>
        </p>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-brand-purple">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-brand-purple">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-brand-purple">
            <FiMail />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-brand-purple">
            <FiMessageCircle />
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
