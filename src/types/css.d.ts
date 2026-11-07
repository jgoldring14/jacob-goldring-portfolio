import 'react'

/** Lets inline styles set CSS custom properties, such as an animation delay. */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
