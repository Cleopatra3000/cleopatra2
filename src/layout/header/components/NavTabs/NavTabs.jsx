import { useLocation } from 'react-router-dom'
import styles from './NavTabs.module.css'

const TABS = [
  { id: 'experiencia', label: 'PLANES' },
  { id: 'galeria', label: 'GALERÍA' },
  { id: 'contacto', label: 'CONTACTO' },
]

const NavTabs = () => {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const activeHash = location.hash || '#experiencia'
  const prefix = isLanding ? '' : '/'

  return (
    <nav className={styles.nav}>
      {TABS.map((tab) => (
        <a
          key={tab.id}
          href={`${prefix}#${tab.id}`}
          className={`${styles.tabLink} ${activeHash === `#${tab.id}` ? styles.tabActive : ''}`}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}

export default NavTabs

