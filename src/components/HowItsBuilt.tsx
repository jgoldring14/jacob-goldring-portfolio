import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const clients = [
  { name: 'Vamo', platform: 'Expo', detail: 'iOS and Android' },
  { name: 'Vamo Host', platform: 'Expo', detail: 'iOS and Android' },
  { name: 'Vamo website', platform: 'Next.js', detail: 'Web' },
]

const backend = ['Postgres', 'Auth', 'Edge functions']

const mine = [
  {
    title: 'Square catalog sync',
    status: 'Building now',
    body: "Brings a vendor's Square menu into Vamo so they don't have to type it twice.",
  },
  {
    title: 'Mobile DevOps',
    body: 'Every build and release for both apps. I also keep Expo and our packages up to date.',
  },
]

/**
 * Lines that join the three client cards to the backend card below them. Below sm the
 * cards stack, so only the center line shows. From sm up the outer lines sit on the
 * column centers of a three-column grid with a 2rem gap.
 */
function Connector() {
  return (
    <div aria-hidden="true" className="relative h-10 sm:h-12">
      <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-primary/30" />
      <span className="absolute left-[calc((100%-4rem)/6)] top-0 hidden h-1/2 w-0.5 -translate-x-1/2 rounded-full bg-primary/30 sm:block" />
      <span className="absolute right-[calc((100%-4rem)/6)] top-0 hidden h-1/2 w-0.5 translate-x-1/2 rounded-full bg-primary/30 sm:block" />
      <span className="absolute left-[calc((100%-4rem)/6)] right-[calc((100%-4rem)/6)] top-1/2 hidden h-0.5 -translate-y-1/2 rounded-full bg-primary/30 sm:block" />
    </div>
  )
}

/**
 * How the Vamo products fit together: two Expo apps and a Next.js website on one
 * Supabase backend, then the two pieces Jacob owns.
 */
export function HowItsBuilt() {
  return (
    <div>
      <FadeInStagger className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
        {clients.map((client) => (
          <FadeIn key={client.name} blur className="flex">
            <article className="w-full rounded-[2rem] bg-surface p-6 text-center shadow-neu">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {client.platform}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {client.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{client.detail}</p>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>

      <Connector />

      <FadeIn blur>
        <article className="rounded-[2rem] p-6 text-center shadow-neu-inset sm:p-8">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Supabase
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
            One shared backend
          </h3>
          <ul
            role="list"
            className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {backend.map((item) => (
              <li
                key={item}
                className="rounded-full bg-surface bg-convex px-4 py-2 text-sm font-medium text-ink shadow-neu-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </FadeIn>

      <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {mine.map((item) => (
          <FadeIn key={item.title} blur className="flex">
            <article className="flex w-full flex-col rounded-[2rem] bg-surface p-6 shadow-neu sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-surface bg-convex px-3 py-1 text-xs font-semibold text-accent shadow-neu-sm">
                  Mine
                </span>
                {item.status && (
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-muted shadow-neu-inset-sm">
                    {item.status}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-muted">{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  )
}
