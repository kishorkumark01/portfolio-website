import { FiAward, FiCheckCircle } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { certifications, achievements } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeading eyebrow="Certifications" title="Verified" highlight="credentials" />
          <div className="mt-8 flex flex-col gap-3">
            {certifications.map((cert, i) => (
              <GlassCard key={cert} delay={i * 0.06} className="flex items-center gap-3 !p-4">
                <FiCheckCircle className="text-brand-purple shrink-0" size={20} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{cert}</span>
              </GlassCard>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Achievements" title="Milestones &" highlight="recognition" />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <GlassCard key={a.label} delay={i * 0.08} className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                  <FiAward />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{a.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
