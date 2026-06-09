import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import Button from './ui/Button'
import Container from './ui/Container'
import { navLinks, site } from '../lib/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Блокируем прокрутку под открытым мобильным меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Якоря работают только с главной; с других страниц ведём на /#anchor
  const anchor = (href: string) => (onHome ? href : `/${href}`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-graphite-900/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Link to="/" aria-label="Бугдас Пласт — на главную" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Десктоп-навигация */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={anchor(l.href)}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-300"
          >
            <Phone size={16} className="text-brand-400" />
            {site.phone}
          </a>
          <Button as="a" href={anchor('#contact')}>
            Оставить заявку
          </Button>
        </div>

        {/* Бургер */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Мобильное меню */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={anchor(l.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.phoneHref}
                className="mt-2 inline-flex items-center gap-2 px-3 py-2 text-base font-semibold text-white"
              >
                <Phone size={18} className="text-brand-400" />
                {site.phone}
              </a>
              <Button
                as="a"
                href={anchor('#contact')}
                size="lg"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Оставить заявку
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
