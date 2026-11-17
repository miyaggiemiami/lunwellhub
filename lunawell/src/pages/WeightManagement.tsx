import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { Check } from '@/components/icons'

const PROGRAMME_INCLUDES = [
  'In-depth metabolic and health assessment with our doctor',
  'Personalised, medically-supervised weight loss protocol',
  'Access to evidence-based medication where clinically appropriate',
  'Nutrition and lifestyle guidance tailored to your goals',
  'Regular check-ins to track progress and adjust your plan',
  'Ongoing support to maintain results long-term',
]

const STEPS = [
  { title: 'Initial Consultation', body: 'Meet with our doctor to discuss your health history, goals and lifestyle.' },
  { title: 'Personalised Plan', body: 'Receive a protocol built around your metabolic profile — never a template.' },
  { title: 'Ongoing Support', body: 'Regular follow-ups keep your plan on track and adjust it as you progress.' },
]

export default function WeightManagement() {
  return (
    <>
      <PageHero
        eyebrow="Weight Management"
        title="Medical weight management that lasts"
        body="Doctor-supervised programmes for safe and sustainable weight loss through metabolic optimisation and evidence-based protocols."
      />

      <section className="section bg-white">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/weight-management-consultation.jpg"
            alt="Doctor consulting a patient on weight management"
            className="order-last aspect-[4/3] w-full rounded-2xl object-cover lg:order-first"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">What the programme includes</h2>
            <p className="mt-4 text-ink-soft">
              Every plan starts with understanding the root cause of weight gain — not just the symptom.
              Your programme is designed and overseen by our medical doctor from day one.
            </p>
            <ul className="mt-6 space-y-3">
              {PROGRAMME_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-3 text-3xl md:text-4xl">A simple, guided pathway</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="card-hover rounded-2xl border border-forest/5 bg-white p-8 shadow-sm">
                <span className="font-serif text-3xl text-gold">{i + 1}</span>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Start your weight management journey" />
    </>
  )
}
