import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: 'Como te contacto?',
    a: 'Por WhatsApp. Es el canal previsto para hablar del plan que tengas en mente.',
  },
  {
    q: 'Que tipo de planes haces?',
    a: 'Planes sociales y tranquilos como comer, ir al cine o dar un paseo con buena conversacion.',
  },
  {
    q: 'Donde quedamos?',
    a: 'En Madrid. Te propongo opciones segun zona y horario para que te resulte comodo.',
  },
  {
    q: 'Con cuanto tiempo debo avisar?',
    a: 'Mejor con algo de antelacion, aunque si estoy disponible podemos concretar el mismo dia.',
  },
  {
    q: 'Que informacion debo enviar?',
    a: 'Solo el tipo de plan, horario aproximado y tu zona preferida.',
  },
  {
    q: 'Esta web ofrece algo ilegal?',
    a: 'No. Esta web es personal, solo para personas adultas y no ofrece servicios sexuales ni actividades contrarias a la ley.',
  },
]

const FAQ = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>

      <div className={styles.list}>
        {FAQ_ITEMS.map((item) => (
          <details key={item.q} className={styles.item}>
            <summary className={styles.summary}>
              <span className={styles.question}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
