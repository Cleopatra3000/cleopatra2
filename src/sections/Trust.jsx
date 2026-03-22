import styles from './Trust.module.css'

const ITEMS = [
  { icon: 'ADULT', label: 'Acceso solo para adultos' },
  { icon: 'SELF', label: 'Fotos propias' },
  { icon: 'CLEAR', label: 'Presentacion personal' },
  { icon: 'CHAT', label: 'Contacto voluntario' },
]

const Trust = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Una landing personal y directa</h2>
        <p className={styles.subtitle}>
          La pagina no funciona como tienda ni como plataforma de contratacion. Es una presentacion
          visual con acceso voluntario a contacto por WhatsApp.
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
