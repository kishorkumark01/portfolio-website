import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolioData'

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-slate-400 dark:text-slate-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200/70 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-brand-gradient"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Two disciplines,"
          highlight="one toolkit"
          subtitle="A development stack for building products, and a marketing stack for getting them seen."
          align="center"
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-7 sm:p-8 flex flex-col gap-5">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Development</h3>
            {skills.development.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.05} />
            ))}
          </div>

          <div className="glass-card p-7 sm:p-8 flex flex-col gap-5">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Digital Marketing</h3>
            {skills.marketing.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
