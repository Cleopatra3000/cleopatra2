import { getWhatsAppHref } from '../config/siteConfig'
import heroImg from '../images/imagenHeader.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Landing personal para adultos</p>
        <h1 className={styles.title}>Una pagina personal, visual y directa</h1>
        <p className={styles.subtitle}>
          Este espacio esta pensado para personas adultas que quieran verme, conocer un poco mi
          estilo y, si les apetece, saludarme por WhatsApp.
        </p>
        <p className={styles.subtitle}>
          No hay tienda, reservas ni contratacion online. La pagina solo muestra contenido personal
          y un acceso voluntario a conversacion.
        </p>

        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primary}`}
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir WhatsApp
          </a>

          <a className={`${styles.button} ${styles.secondary}`} href="#galeria">
            Ver fotos
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
