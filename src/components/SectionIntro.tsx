import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionHeading } from '@/components/SectionHeading'

/**
 * A home or work page section's heading, with optional text under it. The heading
 * slides up into view and the text fades up just after it.
 */
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
      <div className="max-w-2xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {children && (
          <FadeIn
            className="mt-6 text-xl text-muted"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            {children}
          </FadeIn>
        )}
      </div>
    </Container>
  )
}
