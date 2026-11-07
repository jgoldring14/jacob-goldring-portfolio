'use client'

import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'

const chip = {
  hidden: { opacity: 0, scale: 0.9, y: 6 },
  shown: { opacity: 1, scale: 1, y: 0 },
}

/**
 * A row of chips that pop in one after another once the row scrolls into view, a beat
 * after the card around them lands. With reduced motion they're simply there.
 */
export function ChipList({
  items,
  large = false,
  className,
  'aria-label': ariaLabel,
}: {
  items: Array<string>
  large?: boolean
  className?: string
  'aria-label'?: string
}) {
  let shouldReduceMotion = useReducedMotion()

  return (
    <motion.ul
      role="list"
      aria-label={ariaLabel}
      className={clsx('flex flex-wrap', className)}
      inherit={false}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="shown"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.06, delayChildren: 0.25 }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={chip}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={clsx('chip', large && 'chip-lg')}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
