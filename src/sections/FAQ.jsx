import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: 'Como definirias tu estilo?',
    a: 'Soy una mujer educada, culta y con gusto por los planes bien llevados.',
  },
  {
    q: 'Que tipo de planes te gustan?',
    a: 'Me gusta entrenar, la adrenalina, salir a cenar y los planes de bienestar o relax.',
  },
  {
    q: 'Donde estas?',
    a: 'Estoy en Madrid, por la zona de Plaza Castilla.',
  },
  {
    q: 'Como puedo contactar?',
    a: 'Solo por WhatsApp y de forma voluntaria.',
  },
  {
    q: 'La web ofrece algo ilegal?',
    a: 'No. Es una presentacion personal para adultos dentro de un marco legal y respetuoso.',
  },
  {
    q: 'La pagina esta dirigida a menores?',
    a: 'No. El acceso esta limitado a personas mayores de edad.',
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
