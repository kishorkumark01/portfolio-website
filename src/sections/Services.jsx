import {
  FiSearch,
  FiMapPin,
  FiTarget,
  FiInstagram,
  FiShare2,
  FiEdit3,
  FiUsers,
  FiCode,
  FiLayout,
  FiSettings,
} from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { services } from '../data/portfolioData'

const icons = [FiSearch, FiMapPin, FiTarget, FiInstagram, FiShare2, FiEdit3, FiUsers, FiCode, FiLayout, FiSettings]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="What I Do"
          title="Services that move the"
          highlight="needle"
          subtitle="From ranking on page one to shipping production-ready web apps — I cover both sides of business growth."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <GlassCard key={service.title} delay={(i % 3) * 0.08} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white text-xl">
                  <Icon />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{service.desc}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
