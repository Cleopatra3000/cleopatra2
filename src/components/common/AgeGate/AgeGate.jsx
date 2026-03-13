import styles from './AgeGate.module.css'

const AgeGate = ({ onAccept, onReject, status }) => {
  const isDenied = status === 'denied'

  return (
    <div className={styles.backdrop}>
      <section className={styles.card} aria-labelledby="age-gate-title" aria-modal="true" role="dialog">
        <p className={styles.eyebrow}>Acceso restringido</p>
        <h1 id="age-gate-title" className={styles.title}>
          Esta web es solo para mayores de edad
        </h1>

        {isDenied ? (
          <>
            <p className={styles.text}>
              Has indicado que eres menor de edad, así que no puedes acceder a esta web.
            </p>
            <p className={styles.note}>
              Si has respondido por error, recarga la página para volver a comprobarlo.
            </p>
          </>
        ) : (
          <>
            <p className={styles.text}>
              Confirma si eres mayor de 18 años para continuar.
            </p>

            <div className={styles.actions}>
              <button type="button" className={styles.primaryButton} onClick={onAccept}>
                Sí, soy mayor de edad
              </button>
              <button type="button" className={styles.secondaryButton} onClick={onReject}>
                No, soy menor de edad
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default AgeGate
