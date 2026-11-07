import clsx from 'clsx'

import {
  DropLetters,
  letterTiming,
  WordCascade,
} from '@/components/AnimatedText'
import { Container } from '@/components/Container'

const titleSpread = 500

/**
 * Page title block. The title's letters drop in with a soft squash, then the intro text
 * flows in word by word. It's all CSS, so it plays on first paint without waiting for
 * JavaScript, and reduced motion skips it.
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
  let introStart = Math.min(
    letterTiming(title, { spread: titleSpread }).last + 350,
    1000,
  )

  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <h1>
        <span className="eyebrow rise">{eyebrow}</span>
        <span className="sr-only"> - {title}</span>
        <span
          className={clsx(
            'mt-6 block max-w-5xl font-display text-5xl font-semibold tracking-tight text-balance text-ink sm:text-6xl sm:tracking-[-0.03em]',
            centered && 'mx-auto',
          )}
        >
          <DropLetters text={title} spread={titleSpread} soft />
        </span>
      </h1>
      <div
        className={clsx(
          'mt-6 max-w-3xl text-xl text-muted',
          centered && 'mx-auto',
        )}
      >
        <WordCascade start={introStart}>{children}</WordCascade>
      </div>
    </Container>
  )
}
