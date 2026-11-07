'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import { useTheme } from '@/lib/useTheme'

const storageKey = 'theme'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z"
      />
    </svg>
  )
}

/** Light/dark switch. The knob position is pure CSS (`dark:`), so it never flashes on load. */
export function ThemeToggle({ className }: { className?: string }) {
  let isDark = useTheme() === 'dark'

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')
    function onSystemChange(event: MediaQueryListEvent) {
      if (localStorage.getItem(storageKey)) return
      document.documentElement.classList.toggle('dark', event.matches)
    }
    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  function applyTheme(next: boolean) {
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem(storageKey, next ? 'dark' : 'light')
    } catch {}
  }

  /**
   * Where the browser supports view transitions, the new theme grows out of the toggle
   * as a circle. Otherwise, or with reduced motion, it just switches.
   */
  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    let next = !document.documentElement.classList.contains('dark')
    let reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!('startViewTransition' in document) || reduceMotion) {
      applyTheme(next)
      return
    }

    let rect = event.currentTarget.getBoundingClientRect()
    let x = rect.left + rect.width / 2
    let y = rect.top + rect.height / 2
    let radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    document
      .startViewTransition(() => applyTheme(next))
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
      .catch(() => {})
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggle}
      className={clsx(
        'well relative inline-flex h-11 w-19 shrink-0 items-center rounded-full p-1 transition-colors',
        className,
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent shadow-[0_2px_8px_rgb(var(--shadow)/0.22)] transition-transform duration-200 ease-apple-out dark:translate-x-8 dark:bg-white/12 dark:text-primary-text">
        <SunIcon className="h-5 w-5 dark:hidden" />
        <MoonIcon className="hidden h-5 w-5 dark:block" />
      </span>
    </button>
  )
}
