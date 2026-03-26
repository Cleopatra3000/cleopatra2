import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Si eres una persona educada y apasionada, escribeme</h2>
      <p className={styles.subtitle}>
        Estoy en Madrid y disfruto de los planes con estilo, relax y buen ambiente. Si te apetece
        conocerme, hablamos por WhatsApp.
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
