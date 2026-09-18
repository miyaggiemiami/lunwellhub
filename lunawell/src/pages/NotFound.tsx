import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section bg-cream text-center">
      <div className="container-content">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-gold mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
