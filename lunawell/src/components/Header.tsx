import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, MessageCircle, Phone } from './icons'
import { SITE } from '@/config/site'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Weight Management', to: '/weight-management' },
  { label: 'Peptide Therapy', to: '/peptide-therapy' },
  { label: 'Natural Therapies', to: '/natural-therapies' },
  { label: 'Products', to: '/products' },
  { label: 'Fees', to: '/fees' },
  { label: 'Book', to: '/book' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-content">
        <div className="nav-shell flex items-center justify-between gap-4 rounded-pill border border-white/60 bg-white/80 px-3 py-2.5 shadow-[0_8px_30px_rgba(20,39,31,0.09)] backdrop-blur-xl md:px-5">
          {/* Logo */}
          <Link to="/" className="group flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-forest text-gold shadow-[0_4px_12px_rgba(20,39,31,0.2)] transition-transform duration-300 group-hover:rotate-12" aria-hidden="true">
              <span className="h-4 w-4 rounded-full border border-gold/80" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-forest">LunaWell</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={{ animationDelay: `${index * 45}ms` }}
                className={({ isActive }) =>
                  `nav-link relative rounded-full px-3 py-2 text-sm text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest/5 hover:text-forest ${
                    isActive ? 'font-medium text-forest after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-gold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a href={SITE.phoneHref} className="group flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-forest">
              <MessageCircle className="h-4 w-4" />
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">{SITE.phoneDisplay}</span>
            </a>
            <Link to="/book" className="btn-gold whitespace-nowrap shadow-[0_5px_14px_rgba(201,162,75,0.2)] transition-transform hover:-translate-y-0.5">
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 bg-cream/70 text-forest transition-colors hover:bg-forest/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>

        {/* Mobile nav panel */}
        {open && (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="nav-mobile-panel mt-2 flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-[0_12px_35px_rgba(20,39,31,0.12)] backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 35}ms` }}
                className={({ isActive }) =>
                  `nav-mobile-link rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    isActive ? 'bg-forest/5 font-medium text-forest' : 'text-ink-soft hover:bg-forest/5 hover:text-forest'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-forest/5 hover:text-forest"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <Link to="/book" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full">
              Book Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
