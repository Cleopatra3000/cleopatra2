import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: 'WEB',
    title: 'Presentacion clara',
    text: 'Informacion directa, fotos personales y un enfoque adulto, sencillo y respetuoso.',
  },
  {
    icon: 'PLAN',
    title: 'Planes sociales',
    text: 'La propuesta es simple: comer, cine, paseo o conversacion tranquila en Madrid.',
  },
  {
    icon: 'RAPIDO',
    title: 'Coordinacion rapida',
    text: 'El contacto inicial se hace por WhatsApp para hablar con claridad y sin rodeos.',
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
