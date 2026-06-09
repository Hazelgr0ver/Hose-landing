import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: Props) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`${isCenter ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
