export const SITE_CONFIG = {
  displayName: 'Cleopatra',
  city: 'Madrid',
  whatsappNumber: '34603257735',
  whatsappMessage:
    'Hola Cleopatra, me gustaria organizar un plan tranquilo en Madrid. ?Lo coordinamos?',
  legalOwnerName: 'Cleopatra',
  legalTaxId: 'PENDIENTE_DE_COMPLETAR',
  legalAddress: 'Madrid, Espana. Domicilio completo pendiente de completar antes de publicar.',
  legalEmail: 'PENDIENTE_DE_COMPLETAR',
  legalLastUpdated: '21 de marzo de 2026',
}

export const getWhatsAppHref = () => {
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage)
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`
}
