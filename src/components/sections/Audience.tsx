import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { segments } from '../../data/audience'

export default function Audience() {
  return (
    <section id="audience" className="relative py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Для кого"
          title="Кому подходят шланги Бугдас Пласт"
          subtitle="Продукт рассчитан на задачи, где обычный шланг быстро выходит из строя — от частных хозяйств до промышленных производств."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.segment} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-graphite-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-soft-lg">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-bold leading-tight text-white">
                      {s.segment}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{s.task}</p>
                  <p className="mt-4 border-t border-white/5 pt-4 text-sm font-medium text-brand-200">
                    {s.highlight}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
