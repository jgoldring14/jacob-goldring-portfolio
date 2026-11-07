import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { RESUME_URL } from '@/lib/site'

/** Primary contact button with a secondary resume link, for the hero and about page. */
export function ProfileActions({ className }: { className?: string }) {
  return (
    <div
      className={clsx('flex flex-wrap items-center gap-x-8 gap-y-4', className)}
    >
      <Button href="/contact" size="lg">
        Get in touch
      </Button>
      <Link
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-14 items-center gap-1.5 text-base font-semibold text-primary-text underline-offset-4 transition hover:underline"
      >
        Resume
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 ease-apple-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </Link>
    </div>
  )
}
