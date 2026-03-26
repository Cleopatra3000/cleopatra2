import styles from './Trust.module.css'

const ITEMS = [
  { icon: 'FIT', label: 'Gimnasio y energia' },
  { icon: 'RISK', label: 'Aventura y adrenalina' },
  { icon: 'DINNER', label: 'Cena y buena conversacion' },
  { icon: 'RELAX', label: 'Relax y bienestar' },
]

const Trust = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Buena energia, buen ambiente y planes con estilo</h2>
        <p className={styles.subtitle}>
          Me gustan tanto los planes activos como los momentos tranquilos, siempre con educacion,
          afinidad y un ocio agradable dentro de un marco legal.
        </p>
      </header>

      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <article key={item.label} className={styles.badgeCard}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <span className={styles.label}>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Trust
