export const SITE_CONFIG = {
  displayName: 'Cleopatra',
  city: 'Madrid',
  whatsappNumber: '34603257735',
  whatsappMessage:
    'Hola Cleopatra, he visto tu pagina y me gustaria conocerte mejor. ?Hablamos por WhatsApp?',
  legalLastUpdated: '22 de marzo de 2026',
}

export const getWhatsAppHref = () => {
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage)
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`
}
