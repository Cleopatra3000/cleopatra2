import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Si te apetece, escribeme</h2>
      <p className={styles.subtitle}>
        Esta pagina termina aqui. Si quieres saludar o iniciar una conversacion, el contacto es
        directo por WhatsApp y siempre voluntario.
      </p>

      <a
        className={styles.cta}
        href={getWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir a WhatsApp
      </a>
    </section>
  )
}

export default FooterCTA
