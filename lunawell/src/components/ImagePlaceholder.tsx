interface Props {
  label: string
  className?: string
  tone?: 'light' | 'dark'
}

/**
 * Stand-in for the original site's photography.
 * The source app's images could not be retrieved (see README "Known limitations"),
 * so each spot is marked with its intended subject — swap the background/img for
 * the real licensed photo before shipping.
 */
export default function ImagePlaceholder({ label, className = '', tone = 'light' }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-2xl border ${
        tone === 'light' ? 'border-forest/10 bg-gradient-to-br from-forest-100 to-cream-dark' : 'border-white/10 bg-gradient-to-br from-forest-600 to-forest-900'
      } ${className}`}
    >
      <span className={`px-6 text-center text-sm ${tone === 'light' ? 'text-forest/40' : 'text-white/40'}`}>
        {label}
      </span>
    </div>
  )
}
