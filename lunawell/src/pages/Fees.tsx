import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { Link } from 'react-router-dom'

const CONSULTATION_OPTIONS = [
  {
    name: 'Initial Consultation',
    body: 'A comprehensive first assessment with our doctor covering your health history, goals and a personalised plan.',
  },
  {
    name: 'Follow-Up Consultation',
    body: 'Progress review and protocol adjustments for existing patients.',
  },
  {
    name: 'Peptide Therapy Consultation',
    body: 'Assessment and prescription for peptide-based treatment plans.',
  },
  {
    name: 'Natural Therapies Consultation',
    body: 'A botanical and nutritional assessment tailored to your goals.',
  },
]

export default function Fees() {
  return (
    <>
      <PageHero
        eyebrow="Fees"
        title="Personalised care, tailored to you"
        body="Your needs, goals and recommended treatment plan are unique. We’ll discuss your options and any associated costs with you before moving forward."
      />

      <section className="section bg-white">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-2">
            {CONSULTATION_OPTIONS.map((fee) => (
              <div key={fee.name} className="card-hover rounded-2xl border border-forest/5 bg-cream p-8 shadow-sm">
                <div>
                  <h3 className="text-xl">{fee.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{fee.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-gold-50 p-8 text-center">
            <p className="text-ink-soft">
              Your care plan is personalised to your needs. We’ll explain recommended treatments and their
              costs after your consultation.
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
