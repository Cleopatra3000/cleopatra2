import { getWhatsAppHref } from '../config/siteConfig'
import heroImg from '../images/imagenHeader.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Web personal para planes tranquilos en Madrid</h1>
        <p className={styles.subtitle}>
          Un espacio pensado para personas adultas que quieran conocerme mejor y proponer
          actividades sencillas como comer, ir al cine o dar un paseo con buena conversacion.
        </p>

        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primary}`}
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>

          <a className={`${styles.button} ${styles.secondary}`} href="#galeria">
            Ver galeria
          </a>
        </div>
      </div>

      <div className={styles.imageBlock} aria-label="Imagen principal">
        <img
          className={styles.heroImage}
          src={heroImg}
          alt="Imagen principal"
          loading="eager"
        />
      </div>
    </section>
  )
}

export default Hero
