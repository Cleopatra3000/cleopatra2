import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: '¿Cómo te contacto?',
    a: 'Por WhatsApp. Ahí coordinamos rápido el plan que tengas en mente.',
  },
  {
    q: '¿Qué tipo de planes haces?',
    a: 'Planes tranquilos como comer, ir al cine o dar un paseo con buena conversación.',
  },
  {
    q: '¿Dónde quedamos?',
    a: 'En Madrid. Te propongo opciones según zona y horario para que te resulte cómodo.',
  },
  {
    q: '¿Con cuánto tiempo debo avisar?',
    a: 'Mejor con algo de antelación, aunque si estoy disponible podemos concretar el mismo día.',
  },
  {
    q: '¿Qué información debo enviar?',
    a: 'Solo el tipo de plan, horario aproximado y tu zona preferida.',
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

