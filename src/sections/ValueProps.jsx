import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: '01',
    title: 'Educacion y saber estar',
    text: 'Me gusta tratar con personas que valoran la buena conversacion, el respeto y una presencia cuidada.',
  },
  {
    icon: '02',
    title: 'Vida activa y aventura',
    text: 'Gimnasio, energia, deportes de riesgo y planes con intensidad para salir de la rutina.',
  },
  {
    icon: '03',
    title: 'Ocio agradable',
    text: 'Cena, paseo, un sitio bonito, bienestar, relax y planes que hagan que el momento merezca la pena.',
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
