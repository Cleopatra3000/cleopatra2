import { useEffect, useMemo, useState } from 'react'
import foto1 from '../images/fotos/foto1.jpg'
import foto2 from '../images/fotos/foto2.jpg'
import foto3 from '../images/fotos/foto3.jpg'
import foto4 from '../images/fotos/foto4.jpg'
import foto5 from '../images/fotos/foto5.jpg'
import foto6 from '../images/fotos/foto6.jpg'
import foto7 from '../images/fotos/foto7.jpg'
import foto8 from '../images/fotos/foto8.jpg'
import foto9 from '../images/fotos/foto9.jpg'
import foto10 from '../images/fotos/foto10.jpg'
import foto11 from '../images/fotos/foto11.jpg'
import styles from './Gallery.module.css'

const WHATSAPP_HREF =
  'https://wa.me/34603257735?text=Hola%20Cleopatra%2C%20me%20gustar%C3%ADa%20invitarte%20a%20comer%2C%20al%20cine%20o%20a%20dar%20un%20paseo.%20%C2%BFLo%20coordinamos%3F'

const IMAGES = [
  { src: foto1, alt: 'Momento compartido 1' },
  { src: foto2, alt: 'Momento compartido 2' },
  { src: foto3, alt: 'Momento compartido 3' },
  { src: foto4, alt: 'Momento compartido 4' },
  { src: foto5, alt: 'Momento compartido 5' },
  { src: foto6, alt: 'Momento compartido 6' },
  { src: foto7, alt: 'Momento compartido 7' },
  { src: foto8, alt: 'Momento compartido 8' },
  { src: foto9, alt: 'Momento compartido 9' },
  { src: foto10, alt: 'Momento compartido 10' },
  { src: foto11, alt: 'Momento compartido 11' },
]

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedImage = useMemo(
    () => (selectedIndex === null ? null : IMAGES[selectedIndex]),
    [selectedIndex]
  )

  const closeLightbox = () => setSelectedIndex(null)

  const goPrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? prev : (prev - 1 + IMAGES.length) % IMAGES.length
    )
  }

  const goNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? prev : (prev + 1) % IMAGES.length
    )
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIndex])

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {IMAGES.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Abrir ${image.alt} en grande`}
          >
            <img className={styles.image} src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <a
          className={styles.cta}
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Proponer un plan por WhatsApp
        </a>
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              {'x'}
            </button>

            <button
              type="button"
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goPrev}
              aria-label="Imagen anterior"
            >

              {'<'}

            </button>

            <img
              className={styles.modalImage}
              src={selectedImage.src}
              alt={selectedImage.alt}
              loading="eager"
            />

            <button
              type="button"
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goNext}
              aria-label="Imagen siguiente"
            >
              {'>'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
