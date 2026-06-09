import { motion } from 'framer-motion'

// Технологичный визуал продукта: макро спирально-навитого ПВХ-шланга со
// схемой армирования. Анимация мягкая (float + бегущий поток внутри).
export default function HoseVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[520px]"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Подсветка под объектом */}
      <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />

      <motion.svg
        viewBox="0 0 520 420"
        className="w-full drop-shadow-[0_30px_60px_rgba(8,11,17,0.6)]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="tube" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1E2738" />
            <stop offset="0.5" stopColor="#283346" />
            <stop offset="1" stopColor="#0F141E" />
          </linearGradient>
          <linearGradient id="spiral" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#67E8F4" />
            <stop offset="1" stopColor="#0E94A8" />
          </linearGradient>
          <linearGradient id="bore" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#080B11" />
            <stop offset="1" stopColor="#161D2A" />
          </linearGradient>
          <radialGradient id="ring" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#0B0F17" />
            <stop offset="0.7" stopColor="#161D2A" />
            <stop offset="1" stopColor="#283346" />
          </radialGradient>
        </defs>

        {/* Корпус шланга (наклонный цилиндр) */}
        <g transform="translate(40 70)">
          {/* тело */}
          <path
            d="M30 70 L350 30 Q400 26 412 60 L420 96 Q424 132 376 138 L56 178 Q14 182 6 150 L0 110 Q-2 74 30 70 Z"
            fill="url(#tube)"
            stroke="#34465f"
            strokeWidth="1.5"
          />

          {/* спиральное армирование — наклонные витки поверх тела */}
          <g stroke="url(#spiral)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.95">
            {Array.from({ length: 11 }).map((_, i) => {
              const x = 40 + i * 32
              return <path key={i} d={`M${x} 66 q-14 56 8 110`} />
            })}
          </g>

          {/* передний срез — кольца стенки и просвет */}
          <ellipse cx="392" cy="96" rx="30" ry="56" fill="url(#ring)" stroke="#34D6E8" strokeWidth="3" />
          <ellipse cx="392" cy="96" rx="18" ry="38" fill="url(#bore)" />
          {/* бегущий поток внутри просвета */}
          <motion.ellipse
            cx="392"
            cy="96"
            rx="9"
            ry="22"
            fill="none"
            stroke="#67E8F4"
            strokeWidth="2"
            strokeDasharray="3 9"
            animate={{ strokeDashoffset: [0, -48] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
        </g>

        {/* Выноски-характеристики */}
        <g fontFamily="Inter, sans-serif">
          <g>
            <circle cx="120" cy="58" r="4" fill="#34D6E8" />
            <line x1="120" y1="58" x2="120" y2="30" stroke="#34D6E8" strokeWidth="1.2" />
            <text x="120" y="22" textAnchor="middle" fill="#A5F3FC" fontSize="13" fontWeight="600">
              армирование спиралью
            </text>
          </g>
          <g>
            <circle cx="300" cy="300" r="4" fill="#34D6E8" />
            <line x1="300" y1="300" x2="300" y2="332" stroke="#34D6E8" strokeWidth="1.2" />
            <text x="300" y="350" textAnchor="middle" fill="#A5F3FC" fontSize="13" fontWeight="600">
              ПВХ-пластикат повышенной стойкости
            </text>
          </g>
        </g>
      </motion.svg>
    </motion.div>
  )
}
