import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RESUME_URL } from '@/lib/site'
import { ContactForm } from './contact-form'

const contactLinks = [
  {
    label: 'LinkedIn',
    display: 'jacobgoldring14',
    href: 'https://www.linkedin.com/in/jacobgoldring14',
    external: true,
  },
  {
    label: 'Email',
    display: 'jacobgoldring14@gmail.com',
    href: 'mailto:jacobgoldring14@gmail.com?subject=Hello%20Jacob',
    external: false,
  },
]

function ContactDetails() {
  return (
    <FadeIn className="space-y-8">
      <section className="glass glow rounded-4xl p-8 sm:p-10">
        <h2 className="font-display text-xl font-semibold text-ink">Resume</h2>
        <p className="mt-4 text-base text-muted">
          Want the quick version? Here&apos;s everything on one page.
        </p>
        <Button
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-6"
        >
          Resume
          <span aria-hidden="true" className="ml-1.5">
            ↗
          </span>
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </Button>
      </section>

      <section className="glass glow rounded-4xl p-8 sm:p-10">
        <h2 className="font-display text-xl font-semibold text-ink">
          Other ways to reach me
        </h2>
        <ul role="list" className="mt-6 space-y-4 text-sm">
          {contactLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="well group flex items-center justify-between gap-4 rounded-3xl px-5 py-4 transition duration-200 hover:border-primary/30 hover:bg-primary/5"
              >
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">
                    {item.label}
                  </span>
                  <span className="mt-1 block font-semibold wrap-break-word text-primary-text underline-offset-4 group-hover:underline">
                    {item.display}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg text-primary-text transition-transform duration-200 ease-apple-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jacob Goldring by email, LinkedIn or the contact form.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Say hello">
        <p>
          Got a question about Vamo or something you saw here? Send me a message
          and I&apos;ll get back to you.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
