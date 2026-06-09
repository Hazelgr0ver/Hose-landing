import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Частые вопросы"
          title="Коротко о главном"
          subtitle="Не нашли ответ — оставьте заявку, и мы подробно ответим на консультации."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <Reveal key={item.question} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-brand-400/30 bg-graphite-800/80'
                      : 'border-white/10 bg-graphite-800/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? 'bg-brand-500 text-graphite-950' : 'bg-white/5 text-brand-300'
                      }`}
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
