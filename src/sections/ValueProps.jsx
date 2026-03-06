import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: 'AMIGO',
    title: 'Trato cercano',
    text: 'Conversación natural y buen ambiente para compartir un rato agradable.',
  },
  {
    icon: 'PLAN',
    title: 'Planes sencillos',
    text: 'Podemos quedar para comer, ir al cine o dar un paseo por Madrid.',
  },
  {
    icon: 'RAPIDO',
    title: 'Coordinación rápida',
    text: 'Te respondo por WhatsApp para cerrar el plan de forma clara y fácil.',
  },
]

const ValueProps = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <article key={item.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>

            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ValueProps

