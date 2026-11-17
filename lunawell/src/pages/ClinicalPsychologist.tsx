import { SITE } from '@/config/site'

const NAME = 'Noluthando Mauze'
const PHONE = '+27 72 368 2703'
const PHONE_LINK = 'tel:+27723682703'
const WHATSAPP_LINK = 'https://wa.me/27723682703'
const EMAIL = 'noluthandomauze.psych@gmail.com'
const ADDRESS = SITE.address
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`
const APPOINTMENT_LINK = `https://wa.me/27723682703?text=${encodeURIComponent('Hello Noluthando, I would like to book an appointment.')}`

const QUALIFICATIONS = [
  'MSc (Clinical Psychology) (UKZN)',
  'BSocSci Honours Psychology (SACAP)',
  'BA (Wits)',
]

export default function ClinicalPsychologist() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-forest/10 bg-cream">
        <div className="container-content grid gap-12 py-16 md:py-24 lg:grid-cols-[1.35fr,0.65fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Independent Professional Practice</p>
            <h1 className="mt-5 max-w-3xl text-5xl leading-[1.08] md:text-7xl">{NAME}</h1>
            <p className="mt-5 text-xl text-ink-soft md:text-2xl">Clinical Psychologist</p>
            <p className="mt-6 text-sm font-medium tracking-wide text-forest/75">
              PS 0162795 <span className="mx-2 text-gold">|</span> PR 1341014
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-gold">Book an Appointment</a>
              <a href={PHONE_LINK} className="btn-outline">Call {PHONE}</a>
            </div>
          </div>

          <aside className="rounded-2xl border border-forest/10 bg-white/75 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">Appointments</p>
            <p className="mt-3 font-serif text-2xl text-forest">In person and online</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Available in person and online.
            </p>
            <div className="mt-6 border-t border-forest/10 pt-5">
              <p className="text-sm font-medium text-forest">{ADDRESS}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Across from The Syrene Hotel and Elm Tree Restaurant
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-[0.7fr,1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">Professional Profile</p>
            <h2 className="mt-3 text-3xl md:text-4xl">About Noluthando</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-ink-soft">
              A professional biography will be added here once approved.
            </p>
            <p className="mt-5 border-l-2 border-gold/70 pl-4 text-sm leading-relaxed text-ink-faint">
              Noluthando Mauze is an independent practitioner. Her practice is separate from LunaWell Wellness Clinic.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Qualifications</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Education & registration</h2>
            <ul className="mt-7 divide-y divide-forest/10 border-y border-forest/10">
              {QUALIFICATIONS.map((qualification) => (
                <li key={qualification} className="py-4 text-base leading-relaxed text-ink-soft">
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-white p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">Professional registration</p>
            <p className="mt-5 text-sm font-medium uppercase tracking-wide text-ink-faint">PS</p>
            <p className="mt-1 font-serif text-3xl text-forest">0162795</p>
            <div className="my-5 border-t border-forest/10" />
            <p className="text-sm font-medium uppercase tracking-wide text-ink-faint">PR</p>
            <p className="mt-1 font-serif text-3xl text-forest">1341014</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section scroll-mt-28 bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Appointments & contact</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Get in touch</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
              Available in person and online. Contact Noluthando directly to enquire about an appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_LINK} className="btn-outline">Call</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-outline">WhatsApp</a>
              <a href={`mailto:${EMAIL}`} className="btn-outline">Email</a>
              <a href={APPOINTMENT_LINK} target="_blank" rel="noreferrer" className="btn-gold">Book an Appointment</a>
            </div>
            <div className="mt-8 space-y-2 text-sm text-ink-soft">
              <p><a href={PHONE_LINK} className="hover:text-forest">{PHONE}</a></p>
              <p><a href={`mailto:${EMAIL}`} className="break-all hover:text-forest">{EMAIL}</a></p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Location</p>
            <h2 className="mt-3 text-2xl text-forest">Rivonia, Sandton</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ADDRESS}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-faint">
              Across from The Syrene Hotel and Elm Tree Restaurant
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-forest/10 bg-cream">
              <iframe
                title={`Map to ${ADDRESS}`}
                src={MAPS_EMBED}
                className="h-64 w-full border-0 md:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-forest underline decoration-gold underline-offset-4 hover:text-forest-600">
              Open directions in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
