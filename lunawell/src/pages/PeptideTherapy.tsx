import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import CTASection from '@/components/CTASection'

const APPLICATIONS = [
  { title: 'Metabolic Health', body: 'Peptides that support fat metabolism, insulin sensitivity and sustainable weight regulation.' },
  { title: 'Inflammation Reduction', body: 'Targeted therapies to help calm chronic inflammation and support recovery.' },
  { title: 'Recovery & Repair', body: 'Support for tissue repair, muscle recovery and improved sleep quality.' },
  { title: 'Skin Health', body: 'Peptide protocols that support collagen production and skin vitality.' },
]

export default function PeptideTherapy() {
  return (
    <>
      <PageHero
        eyebrow="Peptide Therapy"
        title="Advanced peptide therapy, medically supervised"
        body="Advanced peptide therapies supporting metabolic health, inflammation reduction, recovery, and skin health under medical supervision."
      />

      <section className="section bg-white">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">What is peptide therapy?</h2>
            <p className="mt-4 text-ink-soft">
              Peptides are short chains of amino acids that signal specific processes in the body. Used
              under medical supervision, they can support metabolic function, recovery and overall
              vitality as part of a broader, doctor-led wellness plan.
            </p>
            <p className="mt-4 text-ink-soft">
              Every peptide protocol at LunaWell is prescribed and monitored by our doctor, matched to your
              individual health profile and goals.
            </p>
          </div>
          <ImagePlaceholder label="Vials of peptide therapy compounds on a marble surface" className="aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Applications</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Where peptide therapy helps</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {APPLICATIONS.map((app) => (
              <div key={app.title} className="rounded-2xl border border-forest/5 bg-white p-8 shadow-sm">
                <h3 className="text-xl">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{app.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Discuss peptide therapy with our doctor" />
    </>
  )
}
