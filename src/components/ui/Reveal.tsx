import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Задержка появления, сек */
  delay?: number
  /** Смещение по Y на старте, px */
  y?: number
  className?: string
}

// Плавное появление блока при попадании в зону видимости.
export default function Reveal({ children, delay = 0, y = 24, className = '' }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
