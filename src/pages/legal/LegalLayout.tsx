import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../../components/ui/Container'
import { site } from '../../lib/site'

export type LegalSection = {
  heading: string
  body: (string | string[])[] // строка = абзац, массив строк = маркированный список
}

type Props = {
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
}

export default function LegalLayout({ title, updated, intro, sections }: Props) {
  useEffect(() => {
    document.title = `${title} — ${site.brandName}`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <main className="relative min-h-screen pt-[68px]">
      <div className="border-b border-white/10 bg-graphite-950/60">
        <Container className="py-12 sm:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
          >
            <ArrowLeft size={16} />
            На главную
          </Link>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">Дата последнего обновления: {updated}</p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <article className="mx-auto max-w-3xl">
          {intro && (
            <p className="mb-8 text-base leading-relaxed text-slate-300">{intro}</p>
          )}

          <div className="space-y-9">
            {sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="text-lg font-bold text-white sm:text-xl">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((block, j) =>
                    Array.isArray(block) ? (
                      <ul key={j} className="space-y-2 pl-1">
                        {block.map((li, k) => (
                          <li
                            key={k}
                            className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="text-sm leading-relaxed text-slate-400">
                        {block}
                      </p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-graphite-800/50 p-6 text-sm leading-relaxed text-slate-400">
            <p className="font-semibold text-white">{site.legalName}</p>
            <p className="mt-2">ИНН {site.inn} · КПП {site.kpp} · ОГРН {site.ogrn}</p>
            <p>{site.legalAddress}</p>
            <p className="mt-2">
              Тел.:{' '}
              <a href={site.phoneHref} className="text-brand-300 hover:text-brand-200">
                {site.phone}
              </a>{' '}
              · E-mail:{' '}
              <a href={site.emailHref} className="text-brand-300 hover:text-brand-200">
                {site.email}
              </a>
            </p>
          </div>
        </article>
      </Container>
    </main>
  )
}
