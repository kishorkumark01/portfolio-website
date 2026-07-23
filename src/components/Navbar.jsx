import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import useDarkMode from '../hooks/useDarkMode'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="container-px max-w-6xl mx-auto flex items-center justify-between glass rounded-full px-5 py-2.5">
        <a href="#hero" className="font-display font-bold text-lg tracking-tight">
          Kishor<span className="gradient-text">Kumar</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300/60 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-sm">
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-slate-300/60 dark:border-white/15"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-px max-w-6xl mx-auto mt-2 lg:hidden"
          >
            <ul className="glass rounded-2xl p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
