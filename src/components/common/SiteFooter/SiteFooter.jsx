import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../../config/siteConfig'
import styles from './SiteFooter.module.css'

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          Web personal para personas adultas. Informacion orientativa y contacto inicial por
          WhatsApp.
        </p>

        <nav className={styles.links} aria-label="Enlaces legales">
          <Link className={styles.link} to="/aviso-legal">
            Aviso legal
          </Link>
          <Link className={styles.link} to="/privacidad">
            Privacidad
          </Link>
          <Link className={styles.link} to="/cookies">
            Cookies
          </Link>
        </nav>

        <p className={styles.meta}>
          {SITE_CONFIG.displayName} · {SITE_CONFIG.city}
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
