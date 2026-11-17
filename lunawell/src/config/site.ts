export const SITE = {
  phoneDisplay: '081 785 3273',
  phoneHref: 'tel:+27817853273',
  email: (import.meta.env.VITE_CLINIC_EMAIL as string) || 'info@lunawellhub.co.za',
  doctorEmail: (import.meta.env.VITE_DOCTOR_EMAIL as string) || 'drntsiki@lunawellhub.co.za',
  address: '29 Wessels Road, Rivonia, Ground Floor',
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '27817853273',
}

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}`
