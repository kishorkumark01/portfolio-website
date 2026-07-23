import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting meaningful"
          highlight="products & growth"
        />

        <div className="flex flex-col gap-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg"
            >
              {p}
            </motion.p>
          ))}

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <p className="font-display font-bold text-slate-900 dark:text-white">{h.label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
