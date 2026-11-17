import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from './icons'
import { SITE } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white/70">
      <div className="container-content grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-md bg-white" aria-hidden="true" />
            <span className="font-serif text-lg font-semibold text-white">LunaWell</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Doctor-led wellness specialising in weight management, peptide therapy and natural therapies.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide text-white">Treatments</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/weight-management" className="transition-colors hover:text-gold">Weight Management</Link></li>
            <li><Link to="/peptide-therapy" className="transition-colors hover:text-gold">Peptide Therapy</Link></li>
            <li><Link to="/natural-therapies" className="transition-colors hover:text-gold">Natural Therapies</Link></li>
            <li><Link to="/products" className="transition-colors hover:text-gold">Online Shop</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide text-white">Clinic</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about-us" className="transition-colors hover:text-gold">About Us</Link></li>
            <li><Link to="/fees" className="transition-colors hover:text-gold">Fees</Link></li>
            <li><Link to="/book" className="transition-colors hover:text-gold">Book a Consultation</Link></li>
            <li><Link to="/clinical-psychologist" className="transition-colors hover:text-gold">Independent Clinical Psychologist</Link></li>
            <li><Link to="/#meet-your-doctor" className="transition-colors hover:text-gold">About the Doctor</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide text-white">Get in touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={SITE.phoneHref} className="transition-colors hover:text-gold">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.doctorEmail}`} className="transition-colors hover:text-gold">{SITE.doctorEmail}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} LunaWell Wellness Clinic. All rights reserved.</p>
          <p>Doctor-led wellness. Evidence-based care.</p>
        </div>
      </div>
    </footer>
  )
}
