import styles from './Steps.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Me escribes',
    text: 'Si te apetece, me saludas por WhatsApp.',
  },
  {
    number: '02',
    title: 'Nos conocemos un poco',
    text: 'Hablamos con calma y vemos si encaja un plan agradable.',
  },
  {
    number: '03',
    title: 'Disfrutamos del plan',
    text: 'Cena, paseo, adrenalina o un rato de bienestar en un sitio cuidado.',
  },
]

const Steps = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Como me gusta vivir los planes</h2>
        <p className={styles.subtitle}>Sin prisas y siempre con buena energia.</p>
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
