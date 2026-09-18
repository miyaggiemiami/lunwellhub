import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
})

export const Menu = (props: IconProps) => (
  <svg {...base(props)}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
)

export const X = (props: IconProps) => (
  <svg {...base(props)}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
)

export const MessageCircle = (props: IconProps) => (
  <svg {...base(props)}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
)

export const Phone = (props: IconProps) => (
  <svg {...base(props)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
)

export const ArrowRight = (props: IconProps) => (
  <svg {...base(props)}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

export const Sparkle = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M12 2l1.8 5.6L19.5 9l-5.7 1.8L12 16.5l-1.8-5.7L4.5 9l5.7-1.4L12 2z" />
  </svg>
)

export const ShieldCheck = (props: IconProps) => (
  <svg {...base(props)}><path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" /><path d="m9 12 2 2 4-4" /></svg>
)

export const Stethoscope = (props: IconProps) => (
  <svg {...base(props)}><path d="M4.5 3v5.5a4.5 4.5 0 0 0 9 0V3" /><path d="M8 3H3" /><path d="M14.5 3h-2" /><circle cx="18.5" cy="16.5" r="2.5" /><path d="M13.5 8.5a5 5 0 0 0 5 5.5" /></svg>
)

export const Leaf = (props: IconProps) => (
  <svg {...base(props)}><path d="M11 20A7 7 0 0 1 4 13c0-4.5 5-9 15-9 0 10-4.5 16-9 16z" /><path d="M4 13c3.5-3.5 7-5 11-6" /></svg>
)

export const HeartHandshake = (props: IconProps) => (
  <svg {...base(props)}><path d="M12 6.5c-1.5-2-4.7-2.7-6.5-.9-2 2-1.8 4.9.3 7l6.2 6.1 6.2-6.1c2.1-2.1 2.3-5 .3-7-1.8-1.8-5-1.1-6.5.9z" /></svg>
)

export const Flask = (props: IconProps) => (
  <svg {...base(props)}><path d="M9 2h6" /><path d="M10 2v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8.5V2" /><path d="M7.5 14h9" /></svg>
)

export const Check = (props: IconProps) => (
  <svg {...base(props)}><polyline points="20 6 9 17 4 12" /></svg>
)

export const Calendar = (props: IconProps) => (
  <svg {...base(props)}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
)

export const MapPin = (props: IconProps) => (
  <svg {...base(props)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
)

export const Mail = (props: IconProps) => (
  <svg {...base(props)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
)

export const Instagram = (props: IconProps) => (
  <svg {...base(props)}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
)

export const Facebook = (props: IconProps) => (
  <svg {...base(props)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)

export const Droplet = (props: IconProps) => (
  <svg {...base(props)}><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" /></svg>
)

export const Activity = (props: IconProps) => (
  <svg {...base(props)}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
)
