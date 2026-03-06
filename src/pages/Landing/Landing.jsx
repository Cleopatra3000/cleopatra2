import Hero from '../../sections/Hero'
import ValueProps from '../../sections/ValueProps'
import Gallery from '../../sections/Gallery'
import Steps from '../../sections/Steps'
import Trust from '../../sections/Trust'
import FAQ from '../../sections/FAQ'
import FooterCTA from '../../sections/FooterCTA'
import FloatingWhatsApp from '../../components/common/FloatingWhatsApp/FloatingWhatsApp'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <Hero />
      </section>

      <section id="experiencia" className={styles.section}>
        <ValueProps />
      </section>

      <section id="galeria" className={styles.section}>
        <Gallery />
      </section>

      <section className={styles.section}>
        <Steps />
      </section>

      <section id="trust" className={styles.section}>
        <Trust />
      </section>

      <section className={styles.section}>
        <FAQ />
      </section>

      <section id="contacto" className={styles.section}>
        <FooterCTA />
      </section>

      <FloatingWhatsApp />
    </div>
  )
}

export default Landing
