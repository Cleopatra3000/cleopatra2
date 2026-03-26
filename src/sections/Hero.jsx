import { getWhatsAppHref } from '../config/siteConfig'
import heroImg from '../images/imagenHeader.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Hola, soy Cleopatra</p>
        <h1 className={styles.title}>Educacion, saber estar y ganas de disfrutar del buen ocio</h1>
        <p className={styles.subtitle}>
          Soy una mujer culta, educada y con las ideas claras. Me gusta aprovechar el tiempo y
          compartir momentos que realmente merezcan la pena.
        </p>
        <p className={styles.subtitle}>
          Me encanta entrenar, cuidar mi forma fisica y disfrutar tanto de la adrenalina como de
          una cena agradable, una buena conversacion o un plan de relax en un entorno cuidado. Estoy
          en Madrid, por Plaza Castilla.
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
