import PageHero from '@/components/PageHero'
import { SITE } from '@/config/site'

const PRODUCTS = [
  {
    name: 'LunaWell Balance Tea',
    body: 'Harmonising adaptogenic blend for hormonal balance and calm.',
    image: '/Balance%20Tea%20Herbal%20Jar%20Still%20Life.png',
  },
  {
    name: 'LunaWell Restore Oil',
    body: 'Premium botanical oil to nourish and revitalise from within.',
    image: '/Botanical%20Facial%20Oil%20in%20Soft%20Light.png',
  },
  {
    name: 'Vital Multivitamin',
    body: 'Comprehensive supplement for metabolic function and cellular vitality.',
    image: '/vital-multivitamin.png',
  },
  {
    name: 'LunaWell Herbal Oils',
    body: 'Botanical-grade oils supporting detoxification and restoration.',
    image: '/Botanical%20Amber%20Oils%20on%20Marble.png',
  },
]

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Online Shop"
        title="Shop LunaWell online — coming soon"
        body="Explore the full product range while we prepare a convenient way to shop online. Online ordering will be available soon."
      />

      <section className="section bg-white">
        <div className="container-content">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="group card-hover overflow-hidden rounded-2xl bg-cream shadow-sm">
                <img src={product.image} alt={product.name} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="text-base">{product.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-faint">
            All products shown here will be part of our online shop.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 pt-4 md:px-10">
        <div className="container-content rounded-3xl bg-gradient-to-br from-forest-900 to-forest-700 px-6 py-16 text-center text-white md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Coming Soon</p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl text-white md:text-4xl">Need a product before launch?</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Contact our team to ask about product availability while we prepare the online shop.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Product%20availability`}
            className="btn-gold mt-8 inline-flex"
          >
            Ask about availability
          </a>
        </div>
      </section>
    </>
  )
}
