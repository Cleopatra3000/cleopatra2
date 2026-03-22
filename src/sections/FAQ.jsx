import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: 'Que es esta pagina?',
    a: 'Es una landing personal para adultos con imagenes, presentacion visual y un enlace de contacto por WhatsApp.',
  },
  {
    q: 'Hay venta o contratacion dentro de la web?',
    a: 'No. La pagina no incluye tienda, pagos, reservas ni contratacion online.',
  },
  {
    q: 'La web ofrece servicios sexuales o actividades ilegales?',
    a: 'No. La pagina se presenta como un espacio personal para adultos y no publica ofertas ilegales ni contratacion de servicios.',
  },
  {
    q: 'Como puedo contactar?',
    a: 'Solo por WhatsApp y de forma voluntaria, usando los enlaces visibles en la propia pagina.',
  },
  {
    q: 'La web recoge mis datos?',
    a: 'No hay formularios. La web solo usa almacenamiento local para recordar la verificacion de mayoria de edad.',
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
