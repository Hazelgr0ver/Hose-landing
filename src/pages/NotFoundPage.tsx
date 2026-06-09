import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { site } from '../lib/site'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = `Страница не найдена — ${site.brandName}`
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-[68px] text-center">
      <p className="text-7xl font-black text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Страница не найдена</h1>
      <p className="mt-3 max-w-md text-sm text-slate-400">
        Возможно, страница была перемещена или больше не существует. Вернитесь на
        главную, чтобы продолжить.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-base font-semibold text-graphite-950 shadow-glow transition-all hover:from-brand-300 hover:to-brand-500 hover:-translate-y-0.5"
      >
        <Home size={18} />
        На главную
      </Link>
    </main>
  )
}
