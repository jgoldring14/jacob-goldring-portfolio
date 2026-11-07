import { ChipList } from '@/components/ChipList'
import { Connector } from '@/components/Connector'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const clients = [
  { name: 'Vamo', platform: 'Expo', detail: 'iOS and Android' },
  { name: 'Vamo Host', platform: 'Expo', detail: 'iOS and Android' },
  { name: 'Vamo website', platform: 'Next.js', detail: 'Web' },
]

const backend = [
  {
    title: 'Database',
    items: [
      'Postgres',
      'PostGIS',
      'Row level security',
      'SQL functions',
      'Realtime',
    ],
  },
  {
    title: 'Server',
    items: ['Auth', 'Edge functions', 'Cron jobs', 'Webhooks'],
  },
  { title: 'Files and secrets', items: ['Storage', 'Vault'] },
  {
    title: 'Integrations',
    items: ['Stripe payments', 'Push notifications', 'Email'],
  },
]

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
 * How the Vamo products fit together: two Expo apps and a Next.js website on one
 * Supabase backend, then the two pieces Jacob owns.
 */
export function HowItsBuilt() {
  return (
    <div>
      <FadeInStagger className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
        {clients.map((client) => (
          <FadeIn key={client.name} blur className="flex">
            <article className="glass glow w-full rounded-[1.75rem] p-6 text-center">
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
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
        <article className="glass glow rounded-[1.75rem] bg-linear-to-b from-primary/6 to-transparent p-6 text-center sm:p-8">
          <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Supabase
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
            One shared backend
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {backend.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  {group.title}
                </h4>
                <ChipList
                  items={group.items}
                  aria-label={group.title}
                  className="mt-4 justify-center gap-2"
                />
              </div>
            ))}
          </div>
        </article>
      </FadeIn>

      <FadeInStagger className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {mine.map((item) => (
          <FadeIn key={item.title} blur className="flex">
            <article className="glass glow flex w-full flex-col rounded-[1.75rem] p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-accent">
                  Mine
                </span>
                {item.status && (
                  <span className="well rounded-full px-3 py-1 text-xs font-semibold text-muted">
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
