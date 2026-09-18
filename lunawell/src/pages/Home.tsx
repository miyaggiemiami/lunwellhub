import { Link } from 'react-router-dom'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { ArrowRight, MessageCircle, ShieldCheck, Stethoscope, Leaf, HeartHandshake, Flask, Sparkle } from '@/components/icons'
import { whatsappHref } from '@/config/site'

const TRUST_BADGES = ['Doctor-Led', 'Evidence-Based', 'Sustainable Transformation']

const PILLARS = [
  {
    icon: Stethoscope,
    title: '100% Personalised Care',
    body: 'Every protocol is designed around your unique biology, goals and lifestyle — never a one-size-fits-all plan.',
  },
  {
    icon: Leaf,
    title: 'Renewal & Balance',
    body: "We restore equilibrium through evidence-based therapies rooted in nature's most effective compounds.",
  },
  {
    icon: HeartHandshake,
    title: 'Unified Vision',
    body: 'A single, doctor-led pathway uniting metabolic health, hormonal balance and lasting vitality.',
  },
]

const DOCTOR_FEATURES = [
  {
    icon: Stethoscope,
    title: 'Doctor-Led',
    body: 'Every protocol is personally designed and overseen by our medical doctor.',
  },
  {
    icon: Flask,
    title: 'Medically Curated',
    body: 'Evidence-based therapies selected for your unique biology — never a template.',
  },
  {
    icon: Leaf,
    title: 'Functional Medicine',
    body: 'We treat the root cause, restoring balance through science and nature.',
  },
]

const SERVICES = [
  {
    title: 'Medical Weight Management',
    body: 'Doctor-supervised programmes for safe and sustainable weight loss through metabolic optimisation and evidence-based protocols.',
    to: '/weight-management',
    label: 'Weight management consultation',
  },
  {
    title: 'Peptide Therapy',
    body: 'Advanced peptide therapies supporting metabolic health, inflammation reduction, recovery, and skin health under medical supervision.',
    to: '/peptide-therapy',
    label: 'Vials of peptide therapy compounds',
  },
  {
    title: 'Natural Therapies',
    body: 'Natural wellness treatments restoring balance and supporting wellbeing through botanical formulations and adaptogenic science.',
    to: '/natural-therapies',
    label: 'Botanical natural therapy ingredients',
  },
]

const PRODUCTS = [
  {
    name: 'LunaWell Balance Tea',
    body: 'Harmonising adaptogenic blend for hormonal balance and calm.',
  },
  {
    name: 'LunaWell Restore Oil',
    body: 'Premium botanical oil to nourish and revitalise from within.',
  },
  {
    name: 'Vital Multivitamin',
    body: 'Comprehensive supplement for metabolic function and cellular vitality.',
  },
  {
    name: 'LunaWell Herbal Oils',
    body: 'Botanical-grade oils supporting detoxification and restoration.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest-800/95 via-forest-900/90 to-forest-900" />
        <div className="container-content relative pb-0 pt-16 md:pt-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-normal leading-[1.1] md:text-6xl">
              Doctor-Led Wellness for Sustainable Transformation
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Evidence-based weight management, peptide therapy, and natural wellness solutions designed to
              support your long-term health and metabolic optimisation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/book" className="btn-gold">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services" className="btn-outline-light">
                Explore Treatments
              </a>
            </div>
          </div>

          <div className="relative mt-12 h-64 w-full overflow-hidden rounded-t-3xl md:h-80" aria-hidden="true">
            <ImagePlaceholder label="Macro botanical leaf with water droplet" tone="dark" className="h-full w-full rounded-t-3xl rounded-b-none" />
          </div>
        </div>

        {/* Trust badges strip */}
        <div className="border-t border-white/10 bg-forest-900/60">
          <div className="container-content flex flex-wrap items-center justify-center gap-6 py-5 md:justify-between md:gap-10">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="h-4 w-4 text-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / THREE PILLARS */}
      <section className="section bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Three pillars of lasting wellness</h2>
            <p className="mt-4 text-ink-soft">
              A unified, doctor-led approach that treats the whole person — not just the symptom.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-forest/5 bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-100 text-forest">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET YOUR DOCTOR */}
      <section className="section bg-white">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Meet Your Doctor</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Doctor-led, medically curated functional medicine
            </h2>
            <p className="mt-5 text-ink-soft">
              Your care is personally guided by our medical doctor — uniting metabolic science, peptide
              therapy and natural wellness into one cohesive, sustainable pathway.
            </p>

            <div className="mt-8 space-y-6">
              {DOCTOR_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest-100 text-forest">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/book" className="btn-gold">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <ImagePlaceholder label="Portrait of LunaWell's doctor in clinic" className="aspect-[4/5] w-full" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Treatments built around you</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <ImagePlaceholder label={service.label} className="aspect-[4/3] w-full rounded-none" />
                <div className="p-6">
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                    Discover <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Shop The Range</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Wellness to take home</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <Link
                key={product.name}
                to="/products"
                className="group overflow-hidden rounded-2xl bg-cream shadow-sm transition-shadow hover:shadow-md"
              >
                <ImagePlaceholder label={product.name} className="aspect-square w-full rounded-none" />
                <div className="p-5">
                  <h3 className="text-base">{product.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.body}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/products" className="btn-outline">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 pt-4 md:px-10">
        <div className="container-content rounded-3xl bg-gradient-to-br from-forest-900 to-forest-700 px-6 py-16 text-center text-white md:py-20">
          <Sparkle className="mx-auto h-6 w-6 text-gold" />
          <h2 className="mx-auto mt-4 max-w-xl text-3xl leading-tight text-white md:text-4xl">
            Your transformation begins with a conversation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Book a confidential consultation with our medical team and receive a personalised, no-obligation
            wellness pathway.
          </p>
          <Link to="/book" className="btn-gold mt-8 inline-flex">
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
