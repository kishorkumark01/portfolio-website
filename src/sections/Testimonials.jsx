import { FiMessageSquare } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients"
          highlight="say"
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <GlassCard key={t.name} delay={i * 0.1} className="flex flex-col gap-4">
              <FiMessageSquare className="text-brand-purple" size={22} />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-auto pt-3 border-t border-slate-200/60 dark:border-white/10">
                <p className="font-semibold text-sm text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
