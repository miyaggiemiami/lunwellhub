import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTASection from '@/components/CTASection'

const PRODUCTS = [
  {
    name: 'LunaWell Balance Tea',
    body: 'Harmonising adaptogenic blend for hormonal balance and calm.',
    price: 'R285',
  },
  {
    name: 'LunaWell Restore Oil',
    body: 'Premium botanical oil to nourish and revitalise from within.',
    price: 'R420',
  },
  {
    name: 'Vital Multivitamin',
    body: 'Comprehensive supplement for metabolic function and cellular vitality.',
    price: 'R350',
  },
  {
    name: 'LunaWell Herbal Oils',
    body: 'Botanical-grade oils supporting detoxification and restoration.',
    price: 'R395',
  },
]

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Wellness to take home"
        body="Doctor-curated supplements and botanicals that extend your treatment pathway beyond the clinic."
      />

      <section className="section bg-white">
        <div className="container-content">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="overflow-hidden rounded-2xl bg-cream shadow-sm">
                <ImagePlaceholder label={product.name} className="aspect-square w-full rounded-none" />
                <div className="p-5">
                  <h3 className="text-base">{product.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.body}</p>
                  <p className="mt-3 font-serif text-lg text-forest">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-faint">
            Prices are indicative. Products are available for purchase in-clinic or can be added to your
            treatment plan following a consultation.
          </p>
        </div>
      </section>

      <CTASection title="Ask us which products suit your plan" />
    </>
  )
}
