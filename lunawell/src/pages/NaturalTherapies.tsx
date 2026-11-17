import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const THERAPIES = [
  { title: 'Botanical Formulations', body: 'Adaptogenic herbal blends selected to support hormonal balance and stress resilience.' },
  { title: 'Nutritional Support', body: 'Targeted supplementation to fill nutrient gaps and support cellular vitality.' },
  { title: 'Detoxification Protocols', body: 'Gentle, evidence-informed protocols supporting the body\u2019s natural detox pathways.' },
]

export default function NaturalTherapies() {
  return (
    <>
      <PageHero
        eyebrow="Natural Therapies"
        title="Natural wellness, backed by science"
        body="Natural wellness treatments restoring balance and supporting wellbeing through botanical formulations and adaptogenic science."
      />

      <section className="section bg-white">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/natural-therapies-botanicals.png"
            alt="Fresh botanicals, herbal ingredients, and a mortar and pestle"
            className="order-last aspect-[4/3] w-full rounded-2xl object-cover lg:order-first"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">Nature, medically curated</h2>
            <p className="mt-4 text-ink-soft">
              Our natural therapies pair traditional botanical wisdom with modern evidence, so every
              recommendation is grounded in your individual biology rather than trend.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Restoring balance, naturally</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {THERAPIES.map((t) => (
              <div key={t.title} className="card-hover rounded-2xl border border-forest/5 bg-white p-8 shadow-sm">
                <h3 className="text-xl">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Explore a natural therapies plan for you" />
    </>
  )
}
