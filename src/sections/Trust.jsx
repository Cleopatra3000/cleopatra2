import styles from './Trust.module.css'

const ITEMS = [
  { icon: 'OK', label: 'Buen trato' },
  { icon: 'INFO', label: 'Comunicación clara' },
  { icon: 'TIME', label: 'Puntualidad' },
  { icon: 'PLAN', label: 'Plan acordado sin sorpresas' },
]

const Trust = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Confianza y buen ambiente</h2>
        <p className={styles.subtitle}>Todo se habla con claridad desde el primer mensaje.</p>
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

