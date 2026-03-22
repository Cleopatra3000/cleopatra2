import styles from './Steps.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Descubre la pagina',
    text: 'Mira las fotos y el estilo general de esta landing personal.',
  },
  {
    number: '02',
    title: 'Decide si quieres escribir',
    text: 'No hay formularios ni registro. Solo un acceso directo y voluntario a WhatsApp.',
  },
  {
    number: '03',
    title: 'Contacta si te apetece',
    text: 'Si quieres saludar o iniciar una conversacion, puedes hacerlo desde el boton final.',
  },
]

const Steps = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Como funciona esta landing</h2>
        <p className={styles.subtitle}>Visual, simple y sin pasos innecesarios.</p>
      </header>

      <div className={styles.grid}>
        {STEPS.map((step) => (
          <article key={step.number} className={styles.card}>
            <span className={styles.number} aria-hidden="true">
              {step.number}
            </span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Steps
