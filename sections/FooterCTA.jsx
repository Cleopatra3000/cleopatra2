import styles from './FooterCTA.module.css'

const WHATSAPP_HREF =
  'https://wa.me/34603257735?text=Hola%20Cleopatra%2C%20me%20gustar%C3%ADa%20invitarte%20a%20comer%2C%20al%20cine%20o%20a%20dar%20un%20paseo.%20%C2%BFLo%20coordinamos%3F'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>¿Te apetece que organicemos un plan?</h2>
      <p className={styles.subtitle}>Comer, cine o paseo. Tú eliges y lo coordinamos por WhatsApp.</p>

      <a
        className={styles.cta}
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
      >
        Escribirme por WhatsApp
      </a>
    </section>
  )
}

export default FooterCTA

