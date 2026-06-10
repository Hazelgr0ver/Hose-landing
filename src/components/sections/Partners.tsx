import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { partnerStatement } from '../../lib/site'
import fondLogo from '../../assets/Fond.webp'
import platformLogo from '../../assets/Platform.webp'

/**
 * ОБЯЗАТЕЛЬНЫЙ блок «Партнёры» (требование договора и отчётности перед Фондом).
 * Текст по центру — дословный, менять нельзя.
 * Логотипы: официальные знаки Фонда содействия инновациям (ФСИ) и ПУТП.
 * Файлы — src/assets/Fond.webp и src/assets/Platform.webp.
 */
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
            {/* Логотип Фонда содействия инновациям — слева */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={fondLogo}
                alt="Логотип Фонда содействия инновациям"
                className="h-auto w-full max-w-[230px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Дословный текст — по центру */}
            <p className="mx-auto max-w-xl text-balance text-center text-base leading-relaxed text-graphite-700 sm:text-lg">
              {partnerStatement}
            </p>

            {/* Логотип ПУТП — справа */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={platformLogo}
                alt="Логотип платформы университетского технологического предпринимательства"
                className="h-auto w-full max-w-[210px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
