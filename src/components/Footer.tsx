import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Container from './ui/Container'
import Logo from './Logo'
import { site, offerDisclaimer } from '../lib/site'

const legalLinks = [
  { to: '/privacy', label: 'Политика конфиденциальности' },
  { to: '/consent', label: 'Согласие на обработку ПДн' },
  { to: '/terms', label: 'Пользовательское соглашение' },
  { to: '/cookie', label: 'Cookie-уведомление' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite-950">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* О компании + контакты */}
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Разработка и производство спирально-навитых полимерных шлангов из ПВХ
              для хозяйственно-бытовой, строительной, промышленной и агропромышленной
              сферы.
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-brand-300"
              >
                <Phone size={16} className="text-brand-400" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-brand-300"
              >
                <Mail size={16} className="text-brand-400" />
                {site.email}
              </a>
              <p className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
                {site.legalAddress}
              </p>
            </div>
          </div>

          {/* Документы */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Документы
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Реквизиты */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Реквизиты
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm text-slate-400">
              <div>{site.legalName}</div>
              <div>ИНН {site.inn}</div>
              <div>КПП {site.kpp}</div>
              <div>ОГРН {site.ogrn}</div>
            </dl>
          </div>
        </div>

        {/* Дисклеймер оферты */}
        <p className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-xs leading-relaxed text-slate-500">
          {offerDisclaimer}
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Все права защищены.
          </p>
          <p>{site.director}</p>
        </div>
      </Container>
    </footer>
  )
}
