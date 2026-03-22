import styles from './ValueProps.module.css'

const ITEMS = [
  {
    icon: '01',
    title: 'Perfil personal',
    text: 'Una landing sencilla para mostrar imagenes, estilo y una presentacion breve.',
  },
  {
    icon: '02',
    title: 'Solo adultos',
    text: 'El acceso esta pensado unicamente para personas mayores de edad.',
  },
  {
    icon: '03',
    title: 'Contacto directo',
    text: 'Si quieres escribir, el unico canal previsto es WhatsApp y siempre de forma voluntaria.',
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
