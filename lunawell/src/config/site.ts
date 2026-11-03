export const SITE = {
  phoneDisplay: '081 785 3273',
  phoneHref: 'tel:+27817853273',
  email: (import.meta.env.VITE_CLINIC_EMAIL as string) || 'hello@lunawell.co.za',
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '27817853273',
  instagramUrl: 'https://www.instagram.com/',
  facebookUrl: 'https://www.facebook.com/',
}

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}`
