interface Props {
  eyebrow: string
  title: string
  body: string
}

export default function PageHero({ eyebrow, title, body }: Props) {
  return (
    <section className="bg-forest-900 py-20 text-white md:py-28">
      <div className="container-content max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl leading-tight text-white md:text-5xl">{title}</h1>
        <p className="mt-5 text-white/75">{body}</p>
      </div>
    </section>
  )
}
