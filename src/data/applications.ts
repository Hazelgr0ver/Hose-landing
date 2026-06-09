import { Sprout, HardHat, Factory, Home } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Application = {
  icon: LucideIcon
  title: string
  description: string
  cta: string
}

// Раздел «Где применяется» — направления из брифа (п.9).
export const applications: Application[] = [
  {
    icon: Home,
    title: 'Хозяйственно-бытовая сфера',
    description: 'Шланги для полива, дренажные системы, элементы водоснабжения для дома и участка.',
    cta: 'Подобрать шланг под задачу',
  },
  {
    icon: HardHat,
    title: 'Строительство',
    description: 'Подача и отвод жидкостей, перекачка строительных смесей, дренаж грунтовых вод на площадке.',
    cta: 'Запросить консультацию',
  },
  {
    icon: Factory,
    title: 'Промышленность',
    description: 'Гибкие трубопроводы для химической, пищевой и производственной среды с разными требованиями.',
    cta: 'Обсудить технические требования',
  },
  {
    icon: Sprout,
    title: 'Агропромышленный комплекс',
    description: 'Шланги для полива, дренажа, транспортировки воды и пневмотранспортировки зерна.',
    cta: 'Запросить пилотную партию',
  },
]
