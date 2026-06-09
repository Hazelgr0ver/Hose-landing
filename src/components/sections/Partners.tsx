import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { partnerStatement } from '../../lib/site'

/**
 * ОБЯЗАТЕЛЬНЫЙ блок «Партнёры» (требование договора и отчётности перед Фондом).
 * Текст по центру — дословный, менять нельзя.
 * Логотипы ниже — аккуратные временные плейсхолдеры. Замените их
 * официальными логотипами Фонда содействия инновациям и ПУТП (SVG/PNG),
 * см. комментарии у компонентов FundLogo / PutpLogo.
 */

// Плейсхолдер логотипа Фонда содействия инновациям.
// TODO: заменить на официальный логотип (не искажать пропорции и цвета).
function FundLogo() {
  return (
    <div className="flex h-24 w-full max-w-[230px] flex-col items-center justify-center rounded-2xl border border-graphite-500/40 bg-white px-5 py-4 text-center shadow-soft">
      <span className="text-[26px] font-black leading-none tracking-tight text-[#0E94A8]">
        ФСИ
      </span>
      <span className="mt-1.5 text-[10px] font-semibold uppercase leading-tight tracking-wide text-graphite-700">
        Фонд содействия
        <br />
        инновациям
      </span>
    </div>
  )
}

// Плейсхолдер логотипа ПУТП.
// TODO: заменить на официальный логотип мероприятия (не заменять текстовую часть).
function PutpLogo() {
  return (
    <div className="flex h-24 w-full max-w-[230px] flex-col items-center justify-center rounded-2xl border border-graphite-500/40 bg-white px-5 py-4 text-center shadow-soft">
      <span className="text-[26px] font-black leading-none tracking-tight text-graphite-800">
        ПУТП
      </span>
      <span className="mt-1.5 text-[10px] font-semibold uppercase leading-tight tracking-wide text-graphite-700">
        Платформа университетского
        <br />
        технологического предпринимательства
      </span>
    </div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="relative scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-graphite-900 sm:text-4xl">
            Партнёры
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.5fr_1fr]">
            {/* Логотип Фонда — слева */}
            <div className="flex justify-center lg:justify-start">
              <FundLogo />
            </div>

            {/* Дословный текст — по центру */}
            <p className="mx-auto max-w-xl text-balance text-center text-base leading-relaxed text-graphite-700 sm:text-lg">
              {partnerStatement}
            </p>

            {/* Логотип ПУТП — справа */}
            <div className="flex justify-center lg:justify-end">
              <PutpLogo />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-graphite-500">
            Поддержка Фонда подтверждает статус технологического стартап-проекта.
            Разработка ведётся при участии {' '}
            <span className="font-medium text-graphite-700">
              Иркутского национального исследовательского технического университета
            </span>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
