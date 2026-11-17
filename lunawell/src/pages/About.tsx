import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import { HeartHandshake, Leaf, Stethoscope } from '@/components/icons'

const VALUES = [
  {
    icon: Stethoscope,
    title: 'Doctor-led care',
    body: 'Our medical doctor guides care plans and helps ensure recommendations are appropriate to each person.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised pathways',
    body: 'We take your individual health profile, goals and lifestyle into account rather than relying on a one-size-fits-all plan.',
  },
  {
    icon: Leaf,
    title: 'Science and nature',
    body: 'We bring evidence-informed medical approaches together with considered natural wellness options.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About LunaWell"
        title="Wellness care built around you"
        body="LunaWell is a doctor-led wellness clinic supporting sustainable health through personalised, medically guided care."
      />

      <section className="section bg-white">
        <div className="container-content grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-3 text-3xl md:text-4xl">A thoughtful approach to lasting wellbeing</h2>
          </div>
          <div className="space-y-4 leading-relaxed text-ink-soft">
            <p>
              We bring together medical guidance, individualised wellness planning and natural therapies
              to support your health goals. Our services include medical weight management, peptide
              therapy and natural therapies.
            </p>
            <p>
              Every journey starts with understanding you: your health profile, priorities and lifestyle.
              From there, our team can help shape a considered pathway focused on sustainable progress.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Care that sees the whole person</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-2xl border border-forest/5 bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-100 text-forest">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/book" className="btn-gold">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
