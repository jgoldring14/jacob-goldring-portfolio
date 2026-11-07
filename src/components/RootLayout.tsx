'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'motion/react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { SocialMedia } from '@/components/SocialMedia'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useCardSpotlight } from '@/lib/useCardSpotlight'

const navigation = [
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
]

const toggleSpring = { type: 'spring', stiffness: 300, damping: 24 } as const

/** Two bars that turn into an X while the menu is open. */
function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-2.5 w-5">
      <motion.span
        initial={false}
        animate={open ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={toggleSpring}
        className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-current"
      />
      <motion.span
        initial={false}
        animate={open ? { y: -4, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={toggleSpring}
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-current"
      />
    </span>
  )
}

const menuPanel = {
  closed: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.05, delayChildren: 0.05 },
  },
}

const menuItem = {
  closed: { opacity: 0, y: 12 },
  open: { opacity: 1, y: 0 },
}

/**
 * A page link. The active page sits on a soft pill that slides over from the previous
 * page's link when you navigate. `pillId` keeps the desktop and menu pills apart.
 */
function NavLink({
  href,
  pillId,
  children,
}: {
  href: string
  pillId: string
  children: React.ReactNode
}) {
  let pathname = usePathname()
  let active = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'relative isolate flex h-11 items-center rounded-full px-5 text-sm font-semibold transition duration-150',
        active ? 'text-ink' : 'text-muted hover:bg-ink/4 hover:text-ink',
      )}
    >
      {active && (
        <motion.span
          layoutId={pillId}
          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
          className="absolute inset-0 -z-10 rounded-full bg-ink/6"
        />
      )}
      {children}
    </Link>
  )
}

/** Shared header: name, page links, Contact and the theme switch. Collapses to a menu below md. */
function Header() {
  let pathname = usePathname()
  let panelId = useId()
  let toggleRef = useRef<HTMLButtonElement>(null)
  let [expanded, setExpanded] = useState(false)
  let [menuPath, setMenuPath] = useState(pathname)

  // Close the menu when the page changes. Adjusting state during render, as React
  // recommends, keeps the header mounted so it only drops in once and the nav pill can
  // slide between pages.
  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setExpanded(false)
  }

  useEffect(() => {
    if (!expanded) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setExpanded(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [expanded])

  return (
    <header className="sticky top-0 z-40 pt-3 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-12 before:bg-linear-to-b before:from-surface before:to-surface/0 sm:pt-4 sm:before:h-14">
      <Container>
        <div className="frost glass drop-in flex items-center justify-between gap-2 rounded-full py-2 pr-2 pl-6 [--glass-alpha:0.7] dark:[--glass-alpha:0.55] dark:[--glass:14_17_24]">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight whitespace-nowrap text-ink sm:text-xl"
          >
            Jacob Goldring
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href} pillId="nav-pill">
                {item.title}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 min-[360px]:gap-3">
            <Button
              href="/contact"
              variant="secondary"
              className="max-md:hidden"
            >
              Contact
            </Button>
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls={panelId}
              aria-label={expanded ? 'Close menu' : 'Open menu'}
              className={clsx(
                'flex h-11 w-11 items-center justify-center rounded-full text-ink transition md:hidden',
                expanded ? 'well' : 'glass',
              )}
            >
              <MenuToggleIcon open={expanded} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              id={panelId}
              variants={menuPanel}
              initial="closed"
              animate="open"
              exit="closed"
              className="frost glass absolute inset-x-6 top-full mt-3 rounded-[1.75rem] p-4 [--glass-alpha:0.85] md:hidden dark:[--glass-alpha:0.7] dark:[--glass:14_17_24]"
            >
              <nav aria-label="Main" className="flex flex-col gap-2">
                {[...navigation, { title: 'Contact', href: '/contact' }].map(
                  (item) => (
                    <motion.div key={item.href} variants={menuItem}>
                      <NavLink href={item.href} pillId="menu-pill">
                        {item.title}
                      </NavLink>
                    </motion.div>
                  ),
                )}
              </nav>
              <motion.div
                variants={menuItem}
                className="mt-4 border-t border-line/30 px-5 pt-5"
              >
                <SocialMedia />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let shouldReduceMotion = useReducedMotion()
  useCardSpotlight()

  return (
    <MotionConfig
      reducedMotion="user"
      transition={shouldReduceMotion ? { duration: 0 } : undefined}
    >
      <Header />
      <main className="w-full flex-auto">{children}</main>
      <Footer />
    </MotionConfig>
  )
}
