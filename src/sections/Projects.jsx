import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected"
          highlight="projects"
          subtitle="A mix of full stack builds and marketing case studies — each shipped end to end."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <GlassCard key={project.title} delay={(i % 3) * 0.1} className="flex flex-col overflow-hidden !p-0">
              <div className="h-40 bg-brand-gradient-soft flex items-center justify-center relative">
                <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden="true" />
                <span className="font-display font-bold text-2xl gradient-text relative z-10 px-6 text-center">
                  {project.title}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-2 !px-4 text-sm flex-1"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2 !px-4 text-sm flex-1"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
