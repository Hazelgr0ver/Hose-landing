import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { processSteps } from '../../data/process'

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/5 bg-graphite-950/40 py-20 sm:py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="Как проходит работа"
          title="От заявки до поставки — понятный маршрут"
          subtitle="Прозрачный процесс: вы всегда понимаете, на каком этапе находится задача."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-graphite-800/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30">
                <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-black text-white/[0.04] transition-colors group-hover:text-brand-500/10">
                  {s.step}
                </span>
                <div className="relative">
                  <span className="inline-flex items-center justify-center rounded-lg bg-brand-500/10 px-2.5 py-1 text-sm font-bold text-brand-300 ring-1 ring-inset ring-brand-400/20">
                    Шаг {s.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
