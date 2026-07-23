import { motion } from 'framer-motion'

// Generic glassmorphism card with a subtle scroll-reveal + hover lift.
export default function GlassCard({ children, className = '', delay = 0, as: Component = motion.div }) {
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </Component>
  )
}
