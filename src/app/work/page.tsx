import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SectionIntro } from '@/components/SectionIntro'
import imageLawsOfUxCover from '../../../public/images/laws-of-ux-cover.png'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Vamo, Vamo Host and the Vamo website make up one ecosystem for local markets. Built by Jacob Goldring and his business partner.',
  alternates: { canonical: '/work' },
}

function OtherWorkSection() {
  return (
    <>
      <SectionIntro
        title="Other things I've built"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-12">
        <FadeIn>
          <article className="glass glow grid items-center gap-8 rounded-4xl p-6 sm:grid-cols-[14rem_1fr] sm:p-8 lg:gap-12">
            <div className="well rounded-[1.75rem] p-3">
              <Image
                src={imageLawsOfUxCover}
                alt="Cover slide of the laws-of-ux carousel: Your users shouldn't need a manual."
                className="h-auto w-full rounded-[1.25rem]"
                sizes="(min-width: 640px) 13rem, 100vw"
              />
            </div>
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                Claude skill
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
                laws-of-ux
              </h3>
              <p className="mt-4 text-base text-muted">
                A Claude skill that checks app and website screens against ten
                UX laws from psychology. When something breaks a law it tells
                you how to fix it. I based it on Jon Yablonski&apos;s book and
                built it to review Vamo and Vamo Host.
              </p>
              <Button href="/work/laws-of-ux" className="mt-8">
                See how I built it
              </Button>
            </div>
          </article>
        </FadeIn>
      </Container>
    </>
  )
}

export default function Work() {
  return (
    <>
      <PageIntro eyebrow="Work" title="What I build">
        <div className="space-y-6">
          <p>
            Vamo is a startup I co-founded with my friend and business partner.
            We built it as one connected ecosystem. Whatever device you&apos;re
            on and wherever you are, Vamo is right there with you. It&apos;s
            just the two of us, so we both do a little of everything it takes to
            run a company.
          </p>
          <p>
            Vamo operates in Southern California and we&apos;re growing. One day
            we&apos;d love to be nationwide. We want to help locals share their
            food and culture, and help visitors and tourists find the best
            markets and food around them.
          </p>
        </div>
      </PageIntro>

      <ProjectsSection />

      <OtherWorkSection />
    </>
  )
}
