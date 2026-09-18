import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'

const FEES = [
  {
    name: 'Initial Consultation',
    price: 'R950',
    body: 'A comprehensive first assessment with our doctor covering your health history, goals and a personalised plan.',
  },
  {
    name: 'Follow-Up Consultation',
    price: 'R550',
    body: 'Progress review and protocol adjustments for existing patients.',
  },
  {
    name: 'Peptide Therapy Consultation',
    price: 'R850',
    body: 'Assessment and prescription for peptide-based treatment plans.',
  },
  {
    name: 'Natural Therapies Consultation',
    price: 'R650',
    body: 'A botanical and nutritional assessment tailored to your goals.',
  },
]

export default function Fees() {
  return (
    <>
      <PageHero
        eyebrow="Fees"
        title="Transparent, straightforward pricing"
        body="No hidden costs — every consultation fee is confirmed upfront, and treatment plans are quoted individually after your assessment."
      />

      <section className="section bg-white">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-2">
            {FEES.map((fee) => (
              <div key={fee.name} className="flex items-start justify-between gap-6 rounded-2xl border border-forest/5 bg-cream p-8 shadow-sm">
                <div>
                  <h3 className="text-xl">{fee.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{fee.body}</p>
                </div>
                <span className="shrink-0 font-serif text-2xl text-forest">{fee.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-gold-50 p-8 text-center">
            <p className="text-ink-soft">
              Ongoing treatment costs (medication, peptides, and products) are quoted individually following
              your consultation, based on your personalised plan.
            </p>
            <Link to="/book" className="btn-gold mt-5 inline-flex">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
