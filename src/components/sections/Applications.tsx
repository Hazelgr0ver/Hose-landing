import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { applications } from '../../data/applications'

export default function Applications() {
  return (
    <section
      id="applications"
      className="relative scroll-mt-24 border-y border-white/5 bg-graphite-950/40 py-20 sm:py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="Где применяется"
          title="Одно решение для разных задач"
          subtitle="Подбираем диаметр, длину и материал под конкретную сферу и условия эксплуатации."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {applications.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.title} delay={i * 0.07}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite-800/60 p-7 transition-all duration-300 hover:border-brand-400/30 hover:shadow-soft-lg">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-brand-700/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {a.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-300 transition-all hover:gap-3 hover:text-brand-200"
                  >
                    {a.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
