'use client'

import { motion } from 'motion/react'

const easeAppleOut = [0.22, 1, 0.36, 1] as const
const easeSlide = [0.16, 1, 0.3, 1] as const

/**
 * A section heading that plays once it scrolls into view: the eyebrow fades up, then the
 * title slides up out of a mask. The wrapper is what's watched, since the title starts
 * clipped out of sight. Reduced motion skips the slide through the app's MotionConfig.
 */
export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string
  title: string
}) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
    >
      {eyebrow && (
        <>
          <motion.span
            className="eyebrow mb-6"
            variants={{
              hidden: { opacity: 0, y: 12 },
              shown: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: easeAppleOut }}
          >
            {eyebrow}
          </motion.span>
          <span className="sr-only"> - </span>
        </>
      )}
      <span className="mask-line">
        <motion.span
          className="block font-display text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl"
          variants={{ hidden: { y: '120%' }, shown: { y: 0 } }}
          transition={{
            duration: 1.05,
            ease: easeSlide,
            delay: eyebrow ? 0.12 : 0,
          }}
        >
          {title}
        </motion.span>
      </span>
    </motion.h2>
  )
}
