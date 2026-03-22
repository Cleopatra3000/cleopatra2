import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Te apetece proponer un plan tranquilo?</h2>
      <p className={styles.subtitle}>
        Si eres mayor de edad, podemos hablar por WhatsApp y ver si encaja una propuesta sencilla
        en Madrid.
      </p>

      <a
        className={styles.cta}
        href={getWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Escribirme por WhatsApp
      </a>
    </section>
  )
}

export default FooterCTA
