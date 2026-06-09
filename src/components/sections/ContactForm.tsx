import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle2,
  Loader2,
  Phone,
  Mail,
  AlertCircle,
  ChevronDown,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { site, offerDisclaimer } from '../../lib/site'

const requestTypes = [
  'Консультация',
  'Пилотная партия',
  'Коммерческое предложение',
  'Технический подбор',
]
const fields = ['Быт', 'Строительство', 'Промышленность', 'АПК', 'Другое']

type FormState = {
  name: string
  company: string
  phone: string
  email: string
  messenger: string
  requestType: string
  field: string
  size: string
  medium: string
  pressure: string
  volume: string
  comment: string
  consent: boolean
}

const initial: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  messenger: '',
  requestType: requestTypes[0],
  field: fields[0],
  size: '',
  medium: '',
  pressure: '',
  volume: '',
  comment: '',
  consent: false,
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputCls =
  'w-full rounded-xl border border-white/10 bg-graphite-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-400/20'
const labelCls = 'mb-1.5 block text-sm font-medium text-slate-300'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [showTech, setShowTech] = useState(false)

  // Технические поля автоматически раскрываются для подбора и пилота
  const techRelevant = useMemo(
    () =>
      form.requestType === 'Технический подбор' ||
      form.requestType === 'Пилотная партия',
    [form.requestType],
  )
  const techOpen = showTech || techRelevant

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) next.name = 'Укажите имя'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10) next.phone = 'Укажите корректный телефон'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Проверьте адрес e-mail'
    if (!form.consent) next.consent = 'Необходимо согласие на обработку данных'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    if (!validate()) return

    setStatus('sending')
    try {
      const payload = {
        Имя: form.name,
        'Компания / проект': form.company || '—',
        Телефон: form.phone,
        'E-mail': form.email || '—',
        'Telegram / WhatsApp': form.messenger || '—',
        'Тип запроса': form.requestType,
        'Сфера применения': form.field,
        'Диаметр и длина': form.size || '—',
        'Рабочая среда': form.medium || '—',
        'Давление и температура': form.pressure || '—',
        'Объём партии': form.volume || '—',
        Комментарий: form.comment || '—',
        _subject: `Заявка с сайта Бугдас Пласт — ${form.requestType}`,
        _template: 'table',
        _captcha: 'false',
      }

      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="Оставить заявку"
            title="Расскажите о вашей задаче"
            subtitle="Опишите, где и при каких условиях будет работать шланг. Мы поможем подобрать параметры и обсудим условия пилотной партии или поставки."
          />
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-graphite-800/60 p-6 shadow-soft-lg sm:p-9">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/30">
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">
                    Спасибо, заявка отправлена
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                    Мы свяжемся с вами для уточнения параметров. Если вопрос срочный —
                    позвоните нам напрямую.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      <Phone size={16} className="text-brand-400" />
                      {site.phone}
                    </a>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm font-semibold text-brand-300 hover:text-brand-200"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* honeypot для защиты от спама */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                    value=""
                    onChange={() => {}}
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="name">
                        Имя <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="name"
                        className={inputCls}
                        placeholder="Как к вам обращаться"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                      />
                      {errors.name && <FieldError text={errors.name} />}
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="company">
                        Компания / проект
                      </label>
                      <input
                        id="company"
                        className={inputCls}
                        placeholder="Название организации"
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="phone">
                        Телефон <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={inputCls}
                        placeholder="+7 (___) ___-__-__"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                      />
                      {errors.phone && <FieldError text={errors.phone} />}
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="email">
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={inputCls}
                        placeholder="you@company.ru"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                      />
                      {errors.email && <FieldError text={errors.email} />}
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="messenger">
                        Telegram или WhatsApp
                      </label>
                      <input
                        id="messenger"
                        className={inputCls}
                        placeholder="@username или номер"
                        value={form.messenger}
                        onChange={(e) => update('messenger', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className={labelCls} htmlFor="requestType">
                        Тип запроса
                      </label>
                      <SelectField
                        id="requestType"
                        value={form.requestType}
                        options={requestTypes}
                        onChange={(v) => update('requestType', v)}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="field">
                        Сфера применения
                      </label>
                      <SelectField
                        id="field"
                        value={form.field}
                        options={fields}
                        onChange={(v) => update('field', v)}
                      />
                    </div>
                  </div>

                  {/* Технические параметры — раскрываются для подбора/пилота */}
                  {!techRelevant && (
                    <button
                      type="button"
                      onClick={() => setShowTech((v) => !v)}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${techOpen ? 'rotate-180' : ''}`}
                      />
                      Технические параметры {techOpen ? '' : '(необязательно)'}
                    </button>
                  )}

                  <AnimatePresence initial={false}>
                    {techOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-5 pt-5 sm:grid-cols-2">
                          <div>
                            <label className={labelCls} htmlFor="size">
                              Требуемый диаметр и длина
                            </label>
                            <input
                              id="size"
                              className={inputCls}
                              placeholder="Напр.: Ø32 мм, 50 м"
                              value={form.size}
                              onChange={(e) => update('size', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className={labelCls} htmlFor="medium">
                              Рабочая среда
                            </label>
                            <input
                              id="medium"
                              className={inputCls}
                              placeholder="Вода / смесь / зерно / химия"
                              value={form.medium}
                              onChange={(e) => update('medium', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className={labelCls} htmlFor="pressure">
                              Давление и температура
                            </label>
                            <input
                              id="pressure"
                              className={inputCls}
                              placeholder="Напр.: до 6 атм, −30…+50 °C"
                              value={form.pressure}
                              onChange={(e) => update('pressure', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className={labelCls} htmlFor="volume">
                              Планируемый объём партии
                            </label>
                            <input
                              id="volume"
                              className={inputCls}
                              placeholder="Напр.: 500 м"
                              value={form.volume}
                              onChange={(e) => update('volume', e.target.value)}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5">
                    <label className={labelCls} htmlFor="comment">
                      Комментарий / технические требования
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      className={`${inputCls} resize-none`}
                      placeholder="Опишите задачу и условия эксплуатации"
                      value={form.comment}
                      onChange={(e) => update('comment', e.target.value)}
                    />
                  </div>

                  {/* Согласие */}
                  <div className="mt-5">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update('consent', e.target.checked)}
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-white/20 bg-graphite-900 text-brand-500 accent-brand-500 focus:ring-brand-400"
                      />
                      <span className="text-xs leading-relaxed text-slate-400">
                        Нажимая кнопку, вы соглашаетесь с{' '}
                        <Link
                          to="/privacy"
                          className="text-brand-300 underline underline-offset-2 hover:text-brand-200"
                        >
                          политикой обработки персональных данных
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.consent && <FieldError text={errors.consent} />}
                  </div>

                  {status === 'error' && (
                    <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <span>
                        Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с
                        нами по телефону{' '}
                        <a href={site.phoneHref} className="font-semibold underline">
                          {site.phone}
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-4 text-base font-semibold text-graphite-950 shadow-glow transition-all hover:from-brand-300 hover:to-brand-500 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      'Отправить заявку'
                    )}
                  </button>

                  <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <Mail size={13} />
                    Или напишите напрямую:{' '}
                    <a href={site.emailHref} className="text-brand-300 hover:text-brand-200">
                      {site.email}
                    </a>
                  </p>

                  <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-600">
                    {offerDisclaimer}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function FieldError({ text }: { text: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
      <AlertCircle size={13} />
      {text}
    </p>
  )
}

function SelectField({
  id,
  value,
  options,
  onChange,
}: {
  id: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} cursor-pointer appearance-none pr-10`}
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-graphite-800">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  )
}
