import { useState } from 'react'
import styles from './header.module.css'
import NavTabs from './components/NavTabs/NavTabs'
import tituloImg1 from '../../images/cleopatraTitulo.png'
import tituloImg2 from '../../images/principal2.1.jpg'
import tituloImg3 from '../../images/principal2.2.jpg'

const Header = () => {
  const [fullImage, setFullImage] = useState(false)

  return (
    <>
      <header data-site-header className={styles.header1}>
        <img
          src={tituloImg2}
          alt="imagenHeader1"
          className={styles.titleImage2}
          onClick={() => setFullImage(true)}
        />

        <div className={styles.tituloyTabsContainer}>
          <img src={tituloImg1} alt="Cleopatra" className={styles.titleImage1} />
          <NavTabs />
        </div>

        <img
          src={tituloImg3}
          alt="imagenHeader2"
          className={styles.titleImage2}
          onClick={() => setFullImage(true)}
        />
      </header>

      <header data-site-header className={styles.header2}>
        <div className={styles.tituloyTabsContainer}>
          <img
            src={tituloImg2}
            alt="imagenHeader1"
            className={styles.titleImage2}
            onClick={() => setFullImage(true)}
          />

          <img src={tituloImg1} alt="Cleopatra" className={styles.titleImage1} />

          <img
            src={tituloImg3}
            alt="imagenHeader2"
            className={styles.titleImage2}
            onClick={() => setFullImage(true)}
          />
        </div>

        <NavTabs />
      </header>

      {fullImage && (
        <div className={styles.fullscreenOverlay} onClick={() => setFullImage(false)}>
          <img src={tituloImg2} alt="imagenHeader1 full" className={styles.fullscreenImage} />
        </div>
      )}
    </>
  )
}

export default Header
