import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

/**
 * The 404 page. The card rises in and the 4s drop into place, then the 0 tumbles in
 * late and rocks until it stands up straight.
 */
export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <div className="glass rise mx-auto flex max-w-xl flex-col items-center rounded-4xl px-8 py-12 text-center sm:px-16">
        <p className="well flex h-28 w-40 items-center justify-center rounded-[1.75rem] font-display text-5xl font-semibold text-accent">
          <span className="sr-only">404</span>
          <span aria-hidden="true">
            <span className="drop-letter" style={{ '--d': '350ms' }}>
              4
            </span>
            <span className="wobble-letter" style={{ '--d': '700ms' }}>
              0
            </span>
            <span className="drop-letter" style={{ '--d': '420ms' }}>
              4
            </span>
          </span>
        </p>
        <h1 className="mt-8 font-display text-2xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-2 text-base text-muted">
          Hmm, that page doesn&apos;t exist. It might have moved when I rebuilt
          the site.
        </p>
        <Button href="/" className="mt-8">
          Take me home
        </Button>
      </div>
    </Container>
  )
}
