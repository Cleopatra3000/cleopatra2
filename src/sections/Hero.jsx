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
          Soy una chica culta, con muy buena educacion y con las ideas claras. No me gusta perder
          el tiempo: prefiero centrarme en compartir momentos agradables, conversaciones con nivel y
          experiencias que de verdad merezcan la pena.
        </p>
        <p className={styles.subtitle}>
          Me encanta entrenar durante horas, cuidar mi forma fisica y sentir esa energia que dan el
          gimnasio y una vida activa. Tambien disfruto mucho de los deportes de riesgo, de los
          planes con chispa y de ese punto de adrenalina que convierte cualquier cita en un recuerdo
          especial.
        </p>
        <p className={styles.subtitle}>
          Y, por supuesto, tambien valoro lo contrario: un sitio agradable, una cena deliciosa en
          la ciudad, una buena conversacion, un plan tranquilo de bienestar o incluso una sesion de
          relax en un ambiente cuidado. Vivo en Madrid, por la zona de Plaza Castilla, y si eres una
          persona educada y apasionada, podemos conocernos con calma y compartir un rato agradable
          siempre dentro de un marco legal y respetuoso.
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
