import styles from './Steps.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Escribeme por WhatsApp',
    text: 'Cuentame que plan social te apetece y en que horario te viene bien.',
  },
  {
    number: '02',
    title: 'Elegimos el plan',
    text: 'Acordamos una propuesta concreta como comer, cine o un paseo tranquilo.',
  },
  {
    number: '03',
    title: 'Confirmamos los detalles',
    text: 'Cerramos lugar, hora y condiciones basicas para que todo quede claro desde el inicio.',
  },
]

const Steps = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Como organizamos el plan</h2>
        <p className={styles.subtitle}>Tres pasos simples para quedar de forma clara y comoda.</p>
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
