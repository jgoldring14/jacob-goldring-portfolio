import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  title,
  eyebrow,
  children,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string
  eyebrow?: string
  children?: React.ReactNode
}) {
  return (
    <Container {...props}>
      <FadeIn blur className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span className="eyebrow mb-6">{eyebrow}</span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span className="block font-display text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            {title}
          </span>
        </h2>
        {children && <div className="mt-6 text-xl text-muted">{children}</div>}
      </FadeIn>
    </Container>
  )
}
