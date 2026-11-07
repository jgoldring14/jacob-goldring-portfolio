import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import imageVamoHostIcon from '../../public/images/vamo-host-icon.png'
import imageVamoIcon from '../../public/images/vamo-icon.png'

type AppLink = { label: string; href: string }

type LiveApp = {
  name: string
  audience: string
  icon?: StaticImageData
  description: string
  myPart: string
  tech: Array<string>
  links: Array<AppLink>
}

const apps: Array<LiveApp> = [
  {
    name: 'Vamo',
    audience: 'For shoppers and vendors',
    icon: imageVamoIcon,
    description:
      'Find night markets and pop-ups near you. Vendors book their spot and talk to the host in the same app.',
    myPart: 'Full stack features plus every build and store release',
    tech: ['Expo', 'React Native', 'TypeScript', 'Supabase'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/vamo-discover-street-food/id6737868193',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.vamo.app',
      },
    ],
  },
  {
    name: 'Vamo Host',
    audience: 'For hosts',
    icon: imageVamoHostIcon,
    description:
      'For the people who run markets. Hosts set up their spots and pick their vendors right from their phone.',
    myPart: 'Full stack features on the same backend as Vamo',
    tech: ['Expo', 'React Native', 'TypeScript', 'Supabase'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/vamo-host/id6797667577',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.vamo.host',
      },
    ],
  },
  {
    name: 'Vamo website',
    audience: 'No download needed',
    icon: imageVamoIcon,
    description: 'Everything the apps do right in your browser.',
    myPart: 'Full stack features and web deploys',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
  {
    name: 'Mahalo Banking',
    audience: 'For credit unions',
    description: 'Digital banking that credit unions run on.',
    myPart: 'React Native and web UI on top of C# .NET APIs and SQL',
    tech: ['React Native', 'C#', '.NET', 'SQL'],
    links: [],
  },
]

function AppCard({ app }: { app: LiveApp }) {
  return (
    <article className="flex w-full flex-col rounded-[2rem] bg-surface p-6 shadow-neu transition duration-300 ease-apple-out hover:-translate-y-1 hover:shadow-neu-lg motion-reduce:hover:translate-y-0 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {app.audience}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
            {app.name}
          </h3>
        </div>
        {app.icon && (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-neu-inset-sm">
            <Image
              src={app.icon}
              alt=""
              className="h-10 w-10 rounded-[22%] ring-1 ring-line/20"
              sizes="40px"
            />
          </div>
        )}
      </div>
      <p className="mt-4 text-base text-muted">{app.description}</p>
      <div className="mt-6 rounded-[1.25rem] px-5 py-4 shadow-neu-inset-sm">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          My part
        </p>
        <p className="mt-1 text-base font-medium text-ink">{app.myPart}</p>
      </div>
      <ul
        role="list"
        aria-label="Built with"
        className="mt-6 flex flex-auto flex-wrap content-start gap-2"
      >
        {app.tech.map((item) => (
          <li
            key={item}
            className="cursor-default rounded-full px-3 py-1 text-xs font-semibold text-muted shadow-neu-inset-sm transition duration-200 hover:bg-convex hover:text-primary-text hover:shadow-neu-sm"
          >
            {item}
          </li>
        ))}
      </ul>
      {app.links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 max-sm:[&>*]:px-3.5">
          {app.links.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </article>
  )
}

/**
 * The four production apps Jacob works on: the three Vamo products with their store
 * and web links, plus Mahalo Banking, which is private and so has no links.
 */
export function LiveApps() {
  return (
    <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {apps.map((app) => (
        <FadeIn key={app.name} blur className="flex">
          <AppCard app={app} />
        </FadeIn>
      ))}
    </FadeInStagger>
  )
}
