import { Link } from 'react-router-dom'
import { ArrowRight, Sparkle } from './icons'

interface Props {
  title?: string
  body?: string
}

export default function CTASection({
  title = 'Your transformation begins with a conversation',
  body = 'Book a confidential consultation with our medical team and receive a personalised, no-obligation wellness pathway.',
}: Props) {
  return (
    <section className="px-6 pb-20 pt-4 md:px-10">
      <div className="container-content rounded-3xl bg-gradient-to-br from-forest-900 to-forest-700 px-6 py-16 text-center text-white md:py-20">
        <Sparkle className="mx-auto h-6 w-6 text-gold" />
        <h2 className="mx-auto mt-4 max-w-xl text-3xl leading-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">{body}</p>
        <Link to="/book" className="btn-gold mt-8 inline-flex">
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
