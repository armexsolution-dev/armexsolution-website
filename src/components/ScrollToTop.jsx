import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Immediately before paint
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  useEffect(() => {
    // After full render & layout shifts (images, fonts, etc.)
    const timeout1 = setTimeout(() => window.scrollTo(0, 0), 0)
    const timeout2 = setTimeout(() => window.scrollTo(0, 0), 100)
    const timeout3 = setTimeout(() => window.scrollTo(0, 0), 300)

    // Also observe DOM mutations that might change height
    const observer = new MutationObserver(() => window.scrollTo(0, 0))
    observer.observe(document.body, { childList: true, subtree: true, attributes: true })

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      observer.disconnect()
    }
  }, [pathname])

  return null
}