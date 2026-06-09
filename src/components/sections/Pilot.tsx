import { FlaskConical, ClipboardCheck, RefreshCw, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

const points = [
  {
    icon: FlaskConical,
    title: 'Пробная партия',
    text: 'Проект предусматривает выпуск тестовой партии под задачи конкретного клиента.',
  },
  {
    icon: ClipboardCheck,
    title: 'Испытания в деле',
    text: 'Проверяем материал и конструкцию в реальных условиях эксплуатации.',
  },
  {
    icon: RefreshCw,
    title: 'Адаптация характеристик',
    text: 'Собираем обратную связь и уточняем параметры под требования рынка.',
  },
]

export default function Pilot() {
  return (
    <section id="pilot" className="relative scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-graphite-800 to-graphite-900 p-8 sm:p-12">
            {/* свечение */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-[100px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
                  <FlaskConical size={14} />
                  Пилотные партии и тестирование
                </div>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Проверьте продукт на своих задачах до серийной закупки
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                  Расскажите, где и при каких условиях будет работать шланг. Мы поможем
                  подобрать параметры и обсудим условия пилотной партии или поставки.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button as="a" href="#contact" size="lg">
                    Запросить условия пилотной партии
                    <ArrowRight size={18} />
                  </Button>
                  <Button as="a" href="#contact" size="lg" variant="secondary">
                    Получить консультацию
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {points.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <Reveal key={p.title} delay={0.1 + i * 0.08}>
                      <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{p.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-400">
                            {p.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
