import { useEffect, useState } from 'react'

/**
 * Retorna true quando a página foi rolada além de `thresholdDp`.
 */
export function useScrolled(thresholdDp: number): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > thresholdDp)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [thresholdDp])

  return scrolled
}
