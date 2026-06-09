import { motion } from 'framer-motion'
import { Layers, Atom, Thermometer, Droplets } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

const tech = [
  {
    icon: Atom,
    title: 'Новые рецептуры ПВХ-пластикатов',
    text: 'Составы, рассчитанные на повышенные нагрузки и контакт с агрессивными средами.',
  },
  {
    icon: Layers,
    title: 'Армирование спиралью',
    text: 'Полимерная спираль повышает устойчивость к давлению и сохраняет форму под нагрузкой.',
  },
  {
    icon: Thermometer,
    title: 'Работа на холоде',
    text: 'Материал сохраняет гибкость при низких температурах — для северных регионов.',
  },
  {
    icon: Droplets,
    title: 'Стойкость к средам',
    text: 'Сопротивление абразиву, маслам, кислотам, щелочам и УФ-излучению.',
  },
]

export default function Product() {
  return (
    <section id="product" className="relative scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              align="left"
              eyebrow="Что разрабатывает Бугдас Пласт"
              title="Гибкие армированные шланги для реальных условий эксплуатации"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-slate-300">
                Спирально-навитые полимерные шланги из ПВХ — для транспортировки воды,
                строительных смесей, промышленных жидкостей и сыпучих материалов. За
                счёт новых составов ПВХ-пластикатов и усиления полимерной спиралью
                продукт рассчитан на высокие механические нагрузки, абразивный износ,
                контакт с агрессивными средами и работу при низких температурах.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 rounded-2xl border border-brand-400/20 bg-brand-500/[0.06] p-5">
                <p className="text-sm leading-relaxed text-slate-300">
                  <span className="font-semibold text-brand-300">Главная идея.</span>{' '}
                  Мы продаём не просто «шланг из ПВХ», а надёжность там, где простой
                  расходник оборачивается простоями, частыми заменами и лишними
                  затратами.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {tech.map((t, i) => {
              const Icon = t.icon
              return (
                <Reveal key={t.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full rounded-2xl border border-white/10 bg-graphite-800/60 p-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.text}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
