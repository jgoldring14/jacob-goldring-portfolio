'use client'

import { motion, useReducedMotion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

const line = 'absolute rounded-full bg-primary/30'

/**
 * Lines that join the three client cards to the backend card below them, drawn in once
 * the cards have landed: the drops first, then the rail spreading from the center.
 * Below sm the cards stack, so only the center line shows. From sm up the outer lines
 * sit on the column centers of a three-column grid with a 2rem gap.
 */
export function Connector() {
  let shouldReduceMotion = useReducedMotion()

  function draw(axis: 'x' | 'y', delay: number) {
    let scale = axis === 'x' ? 'scaleX' : 'scaleY'
    return {
      initial: shouldReduceMotion ? false : { [scale]: 0 },
      whileInView: { [scale]: 1 },
      viewport: { once: true, amount: 1 },
      transition: { duration: 0.6, delay, ease },
    }
  }

  return (
    <div aria-hidden="true" className="relative h-10 sm:h-12">
      <motion.span
        {...draw('y', 0.35)}
        className={`${line} top-0 left-1/2 h-full w-0.5 origin-top -translate-x-1/2`}
      />
      <motion.span
        {...draw('y', 0.35)}
        className={`${line} top-0 left-[calc((100%-4rem)/6)] hidden h-1/2 w-0.5 origin-top -translate-x-1/2 sm:block`}
      />
      <motion.span
        {...draw('y', 0.35)}
        className={`${line} top-0 right-[calc((100%-4rem)/6)] hidden h-1/2 w-0.5 origin-top translate-x-1/2 sm:block`}
      />
      <motion.span
        {...draw('x', 0.75)}
        className={`${line} top-1/2 right-[calc((100%-4rem)/6)] left-[calc((100%-4rem)/6)] hidden h-0.5 -translate-y-1/2 sm:block`}
      />
    </div>
  )
}
