import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import FloatingShapes from '../components/FloatingShapes'
import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <FloatingShapes />
      <div className="absolute inset-0 bg-mesh -z-10" aria-hidden="true" />

      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-eyebrow">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" /> Available for freelance work
          </span>

          <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-slate-900 dark:text-white">
            Hey, I'm {profile.name.split(' ')[0]} —
            <br />
            <span className="gradient-text">{profile.title.split('|')[0].trim()}</span>
            <br />& Digital Marketing Freelancer
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire Me <FiArrowRight />
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            <a href={profile.resumeUrl} download className="btn-outline">
              <FiDownload /> Resume
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
            {[
              ['3+', 'Years Experience'],
              ['30+', 'Happy Clients'],
              ['5K+', 'Leads Generated'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{num}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm aspect-square"
        >
          {/* Signature element: rotating gradient ring "orbit" behind the profile glass panel */}
          <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-30 blur-2xl animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-brand-purple/40 animate-spin-slow" />
          <div className="absolute inset-10 glass rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-brand-gradient-soft flex items-center justify-center">
              <span className="font-display text-6xl font-bold gradient-text select-none">KK</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">Currently building</p>
            <p className="font-semibold text-sm">AI Finance Assistant</p>
          </div>
          <div className="absolute -top-4 -right-2 glass rounded-2xl px-4 py-3">
            <p className="font-semibold text-sm gradient-text">98% Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
