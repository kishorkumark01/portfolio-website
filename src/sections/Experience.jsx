import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          align="center"
        />

        <div className="mt-14 max-w-2xl mx-auto relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-brand-gradient sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-0"
              >
                <span className="absolute left-4 sm:left-1/2 top-1 w-3 h-3 rounded-full bg-brand-gradient -translate-x-1/2 ring-4 ring-base-light dark:ring-base-dark" />

                <div className="glass-card p-6">
                  <p className="text-xs font-semibold tracking-wide uppercase text-brand-indigo dark:text-brand-cyan">
                    {item.period}
                  </p>
                  <h3 className="font-display font-bold text-lg mt-1 text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.org}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
