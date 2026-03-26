import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: '01',
    title: 'Educacion y saber estar',
    text: 'Valoro el respeto, la buena conversacion y una presencia cuidada.',
  },
  {
    icon: '02',
    title: 'Vida activa y aventura',
    text: 'Gimnasio, energia y planes con adrenalina para salir de la rutina.',
  },
  {
    icon: '03',
    title: 'Ocio agradable',
    text: 'Cena, paseo, bienestar y relax en un ambiente agradable.',
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
