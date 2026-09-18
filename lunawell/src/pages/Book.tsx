import { useState, type FormEvent } from 'react'
import PageHero from '@/components/PageHero'
import { Check, MessageCircle, Phone, Mail } from '@/components/icons'
import { SITE, whatsappHref } from '@/config/site'

const SERVICES = [
  'Medical Weight Management',
  'Peptide Therapy',
  'Natural Therapies',
  'General / Not Sure Yet',
]

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Book() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!data.get('name') || !data.get('email') || !data.get('phone')) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email and phone number.')
      return
    }

    // No booking backend is configured by default — see README "Book page" section
    // for how to wire this up to Formspree, a serverless function, or your own API.
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Consultation request — ${data.get('service') || 'General'}`)
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nPreferred date: ${data.get('date')}\n\nMessage:\n${data.get('message')}`,
      )
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setStatus('success')
      return
    }

    try {
      setStatus('submitting')
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong sending your request. Please call or WhatsApp us instead.')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Book"
        title="Your transformation begins with a conversation"
        body="Book a confidential consultation with our medical team and receive a personalised, no-obligation wellness pathway."
      />

      <section className="section bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div>
            {status === 'success' ? (
              <div className="rounded-2xl border border-gold/30 bg-gold-50 p-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-forest">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl">Request received</h2>
                <p className="mt-2 text-ink-soft">
                  Thank you — our team will be in touch shortly to confirm your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={status === 'error' ? 'form-error' : undefined}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" autoComplete="name" required />
                  <Field label="Phone number" name="phone" type="tel" autoComplete="tel" required />
                </div>
                <Field label="Email address" name="email" type="email" autoComplete="email" required />

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-forest">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={SERVICES[0]}
                    className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink focus:border-gold"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <Field label="Preferred date" name="date" type="date" />

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-forest">
                    Anything you'd like us to know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink focus:border-gold"
                  />
                </div>

                {status === 'error' && (
                  <p id="form-error" role="alert" className="text-sm text-red-600">
                    {errorMsg}
                  </p>
                )}

                <button type="submit" disabled={status === 'submitting'} className="btn-gold w-full sm:w-auto">
                  {status === 'submitting' ? 'Sending…' : 'Request Consultation'}
                </button>
              </form>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-forest/5 bg-cream p-8">
            <h2 className="text-xl">Prefer to reach us directly?</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href={SITE.phoneHref} className="text-ink-soft hover:text-forest">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-gold" />
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-forest">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href={`mailto:${SITE.email}`} className="text-ink-soft hover:text-forest">{SITE.email}</a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-forest">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink focus:border-gold"
      />
    </div>
  )
}
