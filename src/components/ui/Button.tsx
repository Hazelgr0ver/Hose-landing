import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-900 disabled:opacity-60 disabled:cursor-not-allowed select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-400 to-brand-600 text-graphite-950 shadow-glow hover:from-brand-300 hover:to-brand-500 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-brand-400/40 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }

type AsLink = CommonProps & {
  as: 'a'
  href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button(props: AsButton | AsLink) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
  } = props
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    )
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as AsButton
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
