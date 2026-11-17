import { useState } from 'react'
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
  { label: 'Products', to: '/products' },
  { label: 'Fees', to: '/fees' },
  { label: 'Book', to: '/book' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-forest/10 bg-cream/95 backdrop-blur-xl">
      <div className="hidden border-b border-forest/10 bg-forest px-6 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 md:block">
        <div className="mx-auto flex max-w-content items-center justify-between">
          <span>Doctor-led wellness clinic</span>
          <a href={SITE.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-200">
            <Phone className="h-3.5 w-3.5 text-gold" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex min-h-[78px] items-center justify-between gap-6">
          <Link to="/" className="group flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img src="/Lunawell just L.png" alt="" className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105" />
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
                  `nav-link relative px-3 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-forest ${
                    isActive ? 'text-forest after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gold' : ''
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
            className="flex items-center gap-2 border-l border-forest/15 pl-4 text-xs font-semibold uppercase tracking-[0.14em] text-forest xl:hidden"
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
          <nav id="mobile-nav" aria-label="Primary" className="nav-mobile-panel border-t border-forest/10 pb-5 pt-3 xl:hidden">
            <div className="grid gap-0.5">
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${index * 35}ms` }}
                  className={({ isActive }) =>
                    `nav-mobile-link flex items-center justify-between border-b border-forest/10 py-3 text-sm ${
                      isActive ? 'font-semibold text-forest' : 'text-ink-soft'
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
