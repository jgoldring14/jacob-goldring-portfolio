import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
  return () => observer.disconnect()
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function getServerSnapshot() {
  return null
}

/**
 * The site theme, read live from the `dark` class on <html> that the theme switch and
 * the inline boot script set. Null on the server and during hydration.
 */
export function useTheme() {
  return useSyncExternalStore<Theme | null>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )
}
