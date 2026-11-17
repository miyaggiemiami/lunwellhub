import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const sections = document.querySelectorAll<HTMLElement>('main section')
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    sections.forEach((section) => {
      section.classList.add('scroll-reveal')
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
      sections.forEach((section) => {
        section.classList.remove('scroll-reveal', 'is-revealed')
      })
    }
  }, [pathname])

  return null
}
