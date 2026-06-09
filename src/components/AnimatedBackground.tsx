// Декоративный технологичный фон: мягкая сетка, свечения и «текущие» линии потока.
// Чисто визуальный слой, не мешает чтению (pointer-events-none, низкая контрастность).
export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Базовый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-graphite-900 to-graphite-900" />

      {/* Тонкая сетка */}
      <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] opacity-60" />

      {/* Свечения */}
      <div className="absolute -left-32 top-[-10%] h-[26rem] w-[26rem] rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-1/3 h-[22rem] w-[22rem] rounded-full bg-brand-700/20 blur-[120px]" />

      {/* Линии потока */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#15B8CB" stopOpacity="0" />
            <stop offset="0.5" stopColor="#34D6E8" stopOpacity="1" />
            <stop offset="1" stopColor="#15B8CB" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[18, 38, 58, 78].map((y, i) => (
          <line
            key={y}
            x1="-5%"
            y1={`${y}%`}
            x2="105%"
            y2={`${y - 6}%`}
            stroke="url(#flowGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 14"
            className="animate-flow-dash"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </svg>
    </div>
  )
}
