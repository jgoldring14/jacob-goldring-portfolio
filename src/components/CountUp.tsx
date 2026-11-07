'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

/**
 * A number that counts up from zero the first time it scrolls into view. The final value
 * is in the HTML, so search engines, no-JS visitors and reduced motion all get it as is.
 * The count writes straight to the DOM, so it never re-renders React.
 */
export function CountUp({
  value,
  prefix = '',
}: {
  value: number
  prefix?: string
}) {
  let ref = useRef<HTMLSpanElement>(null)
  let isInView = useInView(ref, { once: true, amount: 0.8 })
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    let element = ref.current
    if (!element) return
    let show = (current: number) => {
      element.textContent = `${prefix}${Math.round(current)}`
    }

    if (shouldReduceMotion) {
      show(value)
      return
    }
    if (!isInView) {
      show(0)
      return
    }
    let controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: show,
    })
    return () => controls.stop()
  }, [isInView, shouldReduceMotion, prefix, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value}
    </span>
  )
}
