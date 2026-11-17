import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, MessageCircle, Phone } from './icons'
import { SITE } from '@/config/site'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Weight Management', to: '/weight-management' },
  { label: 'Peptide Therapy', to: '/peptide-therapy' },
  { label: 'Natural Therapies', to: '/natural-therapies' },
  { label: 'Clinical Psychologist', to: '/clinical-psychologist' },
  { label: 'Online Shop', to: '/products' },
  { label: 'Fees', to: '/fees' },
  { label: 'Book', to: '/book' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 motion-reduce:transition-none ${
        scrolled ? 'bg-transparent' : 'border-b border-forest/10 bg-cream/95'
      }`}
    >
      <div
        aria-hidden={scrolled}
        className={`hidden overflow-hidden bg-forest px-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 transition-all duration-300 motion-reduce:transition-none md:block ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 border-b border-forest/10 py-2 opacity-100'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between">
          <span>Doctor-led wellness clinic</span>
          <a
            href={SITE.phoneHref}
            tabIndex={scrolled ? -1 : undefined}
            className="flex items-center gap-2 transition-colors hover:text-gold-200"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <div
        className={`mx-auto max-w-content transition-all duration-300 motion-reduce:transition-none ${
          scrolled ? 'px-4 pt-2 sm:px-6 md:px-10' : 'px-6 md:px-10'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-300 motion-reduce:transition-none ${
            scrolled
              ? 'min-h-[68px] rounded-2xl border border-white/60 bg-white/75 px-4 shadow-lg shadow-forest/5 backdrop-blur-2xl sm:rounded-full sm:px-6'
              : 'min-h-[78px]'
          }`}
        >
          <Link to="/" className="group flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/Lunawell just L.png"
              alt=""
              className={`object-contain transition-all duration-300 group-hover:scale-105 motion-reduce:transition-none ${
                scrolled ? 'h-10 w-10' : 'h-12 w-12'
              }`}
            />
            <span className="font-serif text-xl font-semibold tracking-tight text-forest">LunaWell</span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={{ animationDelay: `${index * 45}ms` }}
                className={({ isActive }) =>
                  `nav-link rounded-full px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-forest/5 hover:text-forest ${
                    isActive ? 'bg-forest/5 text-forest' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <Link to="/book" className="btn-gold px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5">
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest shadow-sm transition-colors hover:bg-white xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="nav-mobile-panel mt-2 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl shadow-forest/10 backdrop-blur-2xl xl:hidden"
          >
            <div className="grid gap-1">
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${index * 35}ms` }}
                  className={({ isActive }) =>
                    `nav-mobile-link flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors hover:bg-forest/5 ${
                      isActive ? 'bg-forest/5 font-semibold text-forest' : 'text-ink-soft'
                    }`
                  }
                >
                  {link.label}
                  {link.to === '/book' && <MessageCircle className="h-4 w-4 text-gold" />}
                </NavLink>
              ))}
            </div>
            <a href={SITE.phoneHref} className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
              <Phone className="h-4 w-4 text-gold" />
              {SITE.phoneDisplay}
            </a>
            <Link to="/book" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full text-xs uppercase tracking-[0.12em]">
              Book Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
