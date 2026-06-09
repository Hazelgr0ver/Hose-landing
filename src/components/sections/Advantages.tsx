import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { advantages } from '../../data/advantages'

export default function Advantages() {
  return (
    <section id="advantages" className="relative scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Преимущества продукта"
          title="Что закладываем в конструкцию"
          subtitle="Прямые характеристики, на которые рассчитан продукт. Точные значения подтверждаются после технического согласования."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col bg-graphite-800/80 p-7 transition-colors duration-300 hover:bg-graphite-700/80">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-base font-bold leading-tight text-white">
                      {a.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{a.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
