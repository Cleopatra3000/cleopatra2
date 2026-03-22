import styles from './Trust.module.css'

const ITEMS = [
  { icon: 'OK', label: 'Buen trato' },
  { icon: 'INFO', label: 'Comunicacion clara' },
  { icon: 'TIME', label: 'Puntualidad' },
  { icon: 'PLAN', label: 'Planes sociales y legales' },
]

const Trust = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Contacto claro y respetuoso</h2>
        <p className={styles.subtitle}>
          La web esta dirigida solo a personas adultas y plantea actividades legales y acordadas.
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
