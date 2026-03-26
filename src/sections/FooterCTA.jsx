import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Si eres una persona educada y apasionada, escribeme</h2>
      <p className={styles.subtitle}>
        Estoy en Madrid y me encantan los planes con estilo: desde una cena deliciosa hasta un rato
        de bienestar, relax y tiempo compartido en un ambiente agradable. Si te apetece conocerme,
        hablamos por WhatsApp.
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
