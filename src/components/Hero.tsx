import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, FlaskConical, ShieldCheck } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import AnimatedBackground from './AnimatedBackground'
import HoseVisual from './HoseVisual'
import { heroStats } from '../data/stats'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[68px]">
      <AnimatedBackground />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Левая колонка */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300"
          >
            <ShieldCheck size={14} />
            Армированные полимерные шланги нового поколения
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Спирально-навитые{' '}
            <span className="text-gradient">ПВХ-шланги</span> для быта,
            строительства и промышленности
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-300"
          >
            Бугдас Пласт разрабатывает армированные полимерные шланги с повышенной
            износостойкостью, гибкостью, химической и морозостойкостью для российских
            условий эксплуатации.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button as="a" href="#contact" size="lg">
              Оставить заявку
              <ArrowRight size={18} />
            </Button>
            <Button as="a" href="#contact" size="lg" variant="secondary">
              <MessageCircle size={18} />
              Получить консультацию
            </Button>
            <Button as="a" href="#pilot" size="lg" variant="ghost">
              <FlaskConical size={18} />
              Условия пилотной партии
            </Button>
          </motion.div>

          {/* Цифры доверия */}
          <motion.dl
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-white sm:text-[1.7rem]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-slate-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Правая колонка — визуал */}
        <div className="relative">
          <HoseVisual />
        </div>
      </Container>

      {/* Мягкий переход к следующей секции */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-graphite-900" />
    </section>
  )
}
