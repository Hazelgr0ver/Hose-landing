import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'bp-cookie-consent'

// Нижняя плашка-уведомление о cookie. Показывается один раз при первом заходе,
// решение пользователя запоминается в localStorage.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // небольшая задержка, чтобы плашка появилась плавно после загрузки
        const t = setTimeout(() => setVisible(true), 600)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  function dismiss(value: 'accepted' | 'dismissed') {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* localStorage недоступен — просто скрываем */
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Уведомление об использовании файлов cookie"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-white/10 bg-graphite-800/95 p-5 shadow-soft-lg backdrop-blur-md sm:flex-row sm:items-center sm:gap-5 sm:p-6">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-400/20">
              <Cookie size={22} />
            </div>

            <p className="flex-1 text-sm leading-relaxed text-slate-300">
              Мы используем файлы cookie, чтобы сайт работал корректно и удобно. Продолжая
              пользоваться сайтом, вы соглашаетесь с их использованием. Подробнее — в{' '}
              <Link
                to="/cookie"
                className="font-medium text-brand-300 underline underline-offset-2 hover:text-brand-200"
              >
                Cookie-уведомлении
              </Link>
              .
            </p>

            <div className="flex w-full shrink-0 items-center gap-3 sm:w-auto">
              <button
                onClick={() => dismiss('accepted')}
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-2.5 text-sm font-semibold text-graphite-950 shadow-glow transition-all hover:from-brand-300 hover:to-brand-500 sm:flex-none"
              >
                Принять
              </button>
              <button
                onClick={() => dismiss('dismissed')}
                aria-label="Закрыть уведомление"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
