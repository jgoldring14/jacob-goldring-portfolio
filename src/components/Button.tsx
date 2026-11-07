import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

/**
 * Primary is solid blue with a soft colored glow, so the main action is the one thing
 * that stands out. Secondary is a glass pill. Both lift a pixel on hover and press
 * down on click, so every tap gets instant feedback.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition duration-200 ease-apple-out motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]',
    size === 'md' ? 'h-11 px-5 text-sm' : 'h-14 px-8 text-base',
    variant === 'primary'
      ? 'bg-primary text-primary-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_10px_24px_-10px_rgb(var(--primary)/0.75)] hover:brightness-110 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_14px_30px_-10px_rgb(var(--primary)/0.85)] active:brightness-95'
      : 'glass text-ink hover:border-primary/30 hover:text-primary-text',
    className,
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  )
}
