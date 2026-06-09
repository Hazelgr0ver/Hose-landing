import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { problems } from '../../data/problems'

export default function Problems() {
  return (
    <section id="problems" className="relative py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Почему это важно"
          title="Когда шланг не выдерживает — страдает весь процесс"
          subtitle="Простой расходник превращается в источник простоев, частых замен и лишних затрат. Мы создаём продукт для задач, где важны прочность, гибкость и стабильность материала."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-white/10 bg-graphite-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-graphite-700/60 hover:shadow-soft-lg">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20 transition-colors group-hover:bg-brand-500/20">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
