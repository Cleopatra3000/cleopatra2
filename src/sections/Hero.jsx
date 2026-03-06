import heroImg from '../images/imagenHeader.png'
import styles from './Hero.module.css'

const WHATSAPP_HREF =
  'https://wa.me/34603257735?text=Hola%20Cleopatra%2C%20me%20gustar%C3%ADa%20invitarte%20a%20comer%2C%20al%20cine%20o%20a%20dar%20un%20paseo.%20%C2%BFLo%20coordinamos%3F'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Buena compañía para planes tranquilos en Madrid</h1>
        <p className={styles.subtitle}>
          Si te apetece compartir un buen rato, podemos organizar un plan sencillo:
          comer, ir al cine o dar un paseo con conversación agradable.
        </p>

        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primary}`}
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>

          <a className={`${styles.button} ${styles.secondary}`} href="#galeria">
            Ver galería
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

