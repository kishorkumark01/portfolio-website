import SectionHeading from '../components/SectionHeading'
import useCounter from '../hooks/useCounter'
import { marketingResults } from '../data/portfolioData'

function StatCard({ label, value, suffix, delay }) {
  const [count, ref] = useCounter(value)
  return (
    <div ref={ref} className="glass-card p-6 text-center" style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-display text-3xl sm:text-4xl font-bold gradient-text">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{label}</p>
    </div>
  )
}

export default function MarketingResults() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Impact"
          title="Digital marketing"
          highlight="results"
          subtitle="Numbers from campaigns and audits delivered for real clients."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-5">
          {marketingResults.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
