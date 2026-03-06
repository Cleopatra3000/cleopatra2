import styles from './Steps.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Escríbeme por WhatsApp',
    text: 'Cuéntame qué plan te apetece y en qué horario te viene bien.',
  },
  {
    number: '02',
    title: 'Elegimos el plan',
    text: 'Definimos si quedamos para comer, cine o un paseo tranquilo.',
  },
  {
    number: '03',
    title: 'Confirmamos y disfrutamos',
    text: 'Cerramos lugar y hora para pasar un rato agradable con calma.',
  },
]

const Steps = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Cómo organizamos el plan</h2>
        <p className={styles.subtitle}>Tres pasos simples para quedar de forma clara y cómoda.</p>
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

