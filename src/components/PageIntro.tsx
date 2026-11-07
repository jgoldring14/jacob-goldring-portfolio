import { Fragment } from 'react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

/**
 * Page title block. Plays the same CSS entrance as the home hero: the title's words
 * drift up and come into focus one after another, then the intro text follows. It runs
 * on first paint without waiting for JavaScript, and reduced motion skips it.
 */
export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  let words = title.split(' ')
  let introDelay = Math.min(300 + words.length * 150, 1000)

  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <h1>
        <span className="eyebrow rise">{eyebrow}</span>
        <span className="sr-only"> - </span>
        <span
          className={clsx(
            'mt-6 block max-w-5xl font-display text-5xl font-semibold tracking-tight text-balance text-ink sm:text-6xl sm:tracking-[-0.03em]',
            centered && 'mx-auto',
          )}
        >
          {words.map((word, index) => (
            <Fragment key={index}>
              {index > 0 && ' '}
              <span className="word-rise" style={{ '--i': index + 1 }}>
                {word}
              </span>
            </Fragment>
          ))}
        </span>
      </h1>
      <div
        className={clsx(
          'rise mt-6 max-w-3xl text-xl text-muted',
          centered && 'mx-auto',
        )}
        style={{ '--d': `${introDelay}ms` }}
      >
        {children}
      </div>
    </Container>
  )
}
