// Временный фирменный знак «Бугдас Пласт»: технологичный значок на основе
// спирали/слоёв материала + wordmark. После утверждения заменить на официальный логотип.
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#34D6E8" />
            <stop offset="1" stopColor="#0E94A8" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="#0F141E" />
        <g stroke="url(#logoG)" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M16 22c0-5 6-9 16-9s16 4 16 9" />
          <path d="M16 32c0-5 6-9 16-9s16 4 16 9" />
          <path d="M16 42c0-5 6-9 16-9s16 4 16 9" />
          <path d="M16 52c0-5 6-9 16-9s16 4 16 9" />
        </g>
        <line x1="16" y1="22" x2="16" y2="52" stroke="#117585" strokeWidth="4" strokeLinecap="round" />
        <line x1="48" y1="22" x2="48" y2="52" stroke="#117585" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-tight text-white">
          Бугдас Пласт
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-400">
          ПВХ-шланги
        </span>
      </span>
    </span>
  )
}
