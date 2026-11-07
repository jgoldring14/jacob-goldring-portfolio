import { Fragment } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'

import { AppIconFlip } from '@/components/AppIconFlip'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { HowItsBuilt } from '@/components/HowItsBuilt'
import { List, ListItem } from '@/components/List'
import { LiveApps } from '@/components/LiveApps'
import { ProfileActions } from '@/components/ProfileActions'
import { SectionIntro } from '@/components/SectionIntro'
import { Tilt } from '@/components/Tilt'
import imageJacobIllustrated from '../../public/images/jacob-illustrated.webp'
import imageLaptopDesk from '../../public/images/laptop-desk.jpg'

const stats = [
  { value: '~200', label: 'vendors on Vamo' },
  { value: '2', label: 'apps live on iOS and Android' },
  { value: '2024', label: 'first app live in production' },
]

const mahaloWork = [
  'C# and .NET APIs',
  'SQL Server',
  'React Native',
  'Admin tools',
]

const stack = [
  {
    id: 'mobile',
    title: 'Mobile',
    items: 'React Native, Expo, TypeScript, Redux Toolkit, React Native Web',
  },
  { id: 'web', title: 'Web', items: 'Next.js, React, Vue, Tailwind, Figma' },
  {
    id: 'api',
    title: 'API',
    items: 'C#, .NET Web API, Entity Framework, Dapper, Azure, Docker, Swagger',
  },
  {
    id: 'data',
    title: 'Data',
    items: 'SQL Server, PostgreSQL, Supabase, MySQL, SQLite',
  },
]

/**
 * The illustrated portrait in a diamond, turned 45deg like an infield, framed by a thin
 * brand-gradient ring with a soft glow of the same colors behind it. The image is turned
 * back upright and zoomed just enough to fill the diamond's corners.
 */
function Portrait() {
  return (
    <Tilt className="relative mx-auto hidden p-14 lg:block">
      <div
        aria-hidden="true"
        className="ring-gradient absolute inset-16 rotate-45 rounded-[3.5rem] opacity-50 blur-3xl dark:opacity-40"
      />
      <div className="ring-gradient relative h-64 w-64 rotate-45 rounded-[3rem] p-1 shadow-[0_30px_60px_-30px_rgb(var(--shadow)/0.5)] xl:h-80 xl:w-80 xl:rounded-[3.75rem]">
        <div className="h-full w-full overflow-hidden rounded-[2.75rem] bg-surface xl:rounded-[3.5rem]">
          <Image
            src={imageJacobIllustrated}
            alt="Jacob Goldring"
            className="h-full w-full object-cover [transform:rotate(-45deg)_scale(1.45)]"
            sizes="20rem"
            priority
          />
        </div>
      </div>
    </Tilt>
  )
}

const nowBuilding = 'Square catalog sync for Vamo'

/**
 * Plays once on load and is pure CSS, so the hero shows on first paint without waiting
 * for JavaScript. Each word of the first line rises in on its own beat, then the
 * gradient line, then everything else. Reduced motion skips it.
 */
function Hero() {
  let firstLine = ['Full', 'stack', 'engineer']

  return (
    <Container className="mt-16 sm:mt-24 md:mt-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div className="max-w-4xl">
          <p className="eyebrow rise">Hi, I&apos;m Jacob</p>
          <h1 className="mt-6 font-display text-[clamp(1.75rem,9vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-ink [text-wrap:balance] sm:text-7xl lg:text-[5rem] lg:leading-[1.05]">
            <span className="block">
              {firstLine.map((word, index) => (
                <Fragment key={word}>
                  {index > 0 && ' '}
                  <span className="word-rise" style={{ '--i': index + 1 }}>
                    {word}
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="sr-only">, </span>
            <span
              className="text-gradient word-rise block pb-1"
              style={{ '--i': firstLine.length + 1 }}
            >
              <span className="whitespace-nowrap">Co-founder</span> and CTO
            </span>
          </h1>
          <p
            className="rise mt-8 max-w-2xl text-xl text-muted"
            style={{ '--d': '520ms' }}
          >
            I build apps people use every day, from the database all the way to
            the screen you tap. By day I work on a banking app that credit
            unions put their own name on. After hours I&apos;m building Vamo, a
            startup I <span className="whitespace-nowrap">co-founded</span> for
            local markets.
          </p>
          <div className="rise" style={{ '--d': '620ms' }}>
            <ProfileActions className="mt-10" />
            <p className="glass mt-8 inline-flex items-center gap-3 rounded-full py-2 pl-3 pr-4 text-sm text-muted">
              <span className="now-dot" aria-hidden="true" />
              <span>
                <span className="font-semibold text-ink">Now building</span>{' '}
                {nowBuilding}
              </span>
            </p>
          </div>
        </div>
        <div className="rise-scale hidden lg:block" style={{ '--d': '200ms' }}>
          <Portrait />
        </div>
      </div>
    </Container>
  )
}

function MahaloSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="glass grid items-center gap-10 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="max-w-2xl">
          <h2>
            <span className="eyebrow mb-6">Mahalo Banking · Fintech</span>
            <span className="sr-only"> - </span>
            <span className="block font-display text-3xl font-semibold tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
              One codebase that becomes a different app for every credit union
            </span>
          </h2>
          <p className="mt-6 text-xl text-muted">
            Mahalo builds digital banking for credit unions, and no two of them
            want the same app. So one codebase turns into a different app for
            each one. Each one gets its own look and its own mix of features.
            When I ship a feature I&apos;m really shipping every version of it
            that a credit union might turn on.
          </p>
        </div>
        <div className="well rounded-[1.75rem] p-6 sm:p-8 lg:w-72">
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            What I work on
          </h3>
          <ul role="list" className="mt-5 flex flex-wrap gap-3">
            {mahaloWork.map((item) => (
              <li key={item} className="chip chip-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Container>
  )
}

function VamoSection() {
  return (
    <Container className="mt-8">
      <FadeIn className="glass grid items-center gap-8 rounded-[2rem] p-8 sm:gap-12 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-16">
        <AppIconFlip />
        <div className="max-w-2xl">
          <h2>
            <span className="eyebrow mb-6">Vamo · Local markets</span>
            <span className="sr-only"> - </span>
            <span className="block font-display text-3xl font-semibold tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
              Built for the whole market
            </span>
          </h2>
          <p className="mt-6 text-xl text-muted">
            Vamo started as a street food discovery app. Now it&apos;s two apps
            and a website for local markets. Shoppers find what&apos;s on and
            vendors book their spots. Hosts run the whole market from their
            phone. It&apos;s just my business partner and me, so we both do a
            lot of everything.
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="well flex items-center gap-3 rounded-[1.5rem] px-5 py-3 sm:flex-col sm:items-start sm:gap-0 sm:py-4"
              >
                <dt className="order-last text-sm text-muted sm:mt-1">
                  {stat.label}
                </dt>
                <dd className="min-w-[4rem] font-display text-2xl font-semibold tracking-tight text-primary-text sm:min-w-0 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </Container>
  )
}

function LiveAppsSection() {
  return (
    <>
      <SectionIntro
        eyebrow="In production"
        title="Live apps I work on every day"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-12">
        <LiveApps />
      </Container>
    </>
  )
}

function HowItsBuiltSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Vamo"
        title="How it's built"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Two apps and a website run on one Supabase backend. I work across all
          of it and own the two pieces marked Mine.
        </p>
      </SectionIntro>
      <Container className="mt-12">
        <HowItsBuilt />
      </Container>
    </>
  )
}

function StackSection() {
  return (
    <>
      <SectionIntro
        eyebrow="Stack"
        title="What I reach for"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stack.map((group) => (
            <FadeIn key={group.id} blur className="flex">
              <article className="glass glow flex w-full flex-col rounded-[1.75rem] p-8">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {group.title}
                </h3>
                <ul role="list" className="mt-6 flex flex-wrap gap-3">
                  {group.items.split(', ').map((item) => (
                    <li key={item} className="chip chip-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Timeline() {
  return (
    <>
      <SectionIntro
        eyebrow="Timeline"
        title="How I got here"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-full max-w-[33.75rem] flex-none lg:w-[36rem] lg:max-w-none">
              <div className="glass rounded-[2rem] p-4 sm:p-5">
                <Image
                  src={imageLaptopDesk}
                  alt=""
                  sizes="(min-width: 1024px) 34rem, (min-width: 640px) 31rem, 100vw"
                  className="aspect-[4/3] w-full rounded-[1.75rem] object-cover grayscale"
                />
              </div>
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-8">
            <ListItem title="Vamo, 2024 to now">
              Co-founder and CTO. Vamo started as a street food discovery app
              and grew into an app for local markets. Today it&apos;s two apps
              and a website on one backend. My partner and I both do a lot of
              everything. I also handle our mobile DevOps. That means builds and
              releases plus SDK upgrades and security checks. I try to keep the
              code easy to test, since stable code makes for a stable app.
            </ListItem>
            <ListItem title="Mahalo Banking, 2022 to now">
              I helped build our online banking platform from the ground up as a
              modern rebuild of the original. As a Development Engineer 2 I work
              across the whole stack, from React Native and web UI to C# .NET
              APIs and SQL. I built many of our features for neurodivergent
              members and I back up our mobile DevOps.
            </ListItem>
            <ListItem title="Flatiron School, 2021">
              A full-time coding bootcamp. I put in about 16 hours a day for
              five or six days a week. That&apos;s where I learned JavaScript
              and React plus Ruby on Rails.
            </ListItem>
            <ListItem title="Started coding, 2020">
              I took a JavaScript course after work every day and got hooked.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Jacob Goldring is a full stack engineer who builds banking apps for credit unions. He is also the co-founder and CTO of Vamo, an app for local markets.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Hero />
      <MahaloSection />
      <VamoSection />
      <LiveAppsSection />
      <HowItsBuiltSection />
      <StackSection />
      <Timeline />
    </>
  )
}
