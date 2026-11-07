import { Button } from '@/components/Button'
import { ChipList } from '@/components/ChipList'

type ProjectLink = { label: string; href: string }

type Project = {
  name: string
  audience: string
  description: string
  tech: string
  links: Array<ProjectLink>
}

const projects: Array<Project> = [
  {
    name: 'Vamo',
    audience: 'For shoppers and vendors',
    description:
      'Find local markets and pop-ups near you. See which vendors are coming and follow the market map to any spot. Vendors can apply for a spot and pay for it in the app. They also get their setup time and a group chat for every market. Available on iOS and Android.',
    tech: 'React Native, Expo, TypeScript, Tamagui, Supabase, Redux Toolkit',
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
    description:
      'Vamo Host is for the people who run markets. Hosts set up spots and prices and review vendor applications. They build the market map and plan when vendors arrive. Then they get paid out after the market. It runs on the same backend as the main app.',
    tech: 'React Native, Expo, TypeScript, Supabase',
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
    name: 'Vamo Website',
    audience: 'No download needed',
    description:
      "Everything the apps do right in your browser. It works for shoppers and vendors as well as hosts. Great if you don't want to download anything. The apps are still the better pick when you're out at a market.",
    tech: 'Next.js, TypeScript, Tailwind, Supabase',
    links: [{ label: 'hellovamo.app', href: 'https://hellovamo.app' }],
  },
]

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="glass glow flex w-full flex-col rounded-[1.75rem] p-6 sm:p-8">
      <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
        {project.audience}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
        {project.name}
      </h3>
      <p className="mt-4 flex-auto text-base text-muted">
        {project.description}
      </p>
      <ChipList
        items={project.tech.split(', ')}
        aria-label="Built with"
        className="mt-6 gap-2"
      />
      <div className="mt-8 flex flex-wrap gap-2 max-sm:*:px-3.5 sm:gap-3">
        {project.links.map((link) => (
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
    </article>
  )
}

export function Projects(props: React.ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul role="list" {...props}>
      {projects.map((project) => (
        <li key={project.name} className="flex">
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  )
}
