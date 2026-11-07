import { useEffect } from 'react'

/**
 * Feeds the pointer position into the `.glow` card under it as `--x` and `--y`, which the
 * card's spotlight gradient follows. One listener for the whole page, and only on
 * devices with a precise pointer, so touch screens never pay for it.
 */
export function useCardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    function onPointerMove(event: PointerEvent) {
      if (!(event.target instanceof Element)) return
      let card = event.target.closest('.glow')
      if (!(card instanceof HTMLElement)) return
      let rect = card.getBoundingClientRect()
      card.style.setProperty('--x', `${event.clientX - rect.left}px`)
      card.style.setProperty('--y', `${event.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => document.removeEventListener('pointermove', onPointerMove)
  }, [])
}
