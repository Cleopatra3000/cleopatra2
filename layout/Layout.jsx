import Header from './header/Header'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.appShell}>
      <Header />

      <main className={styles.appMain}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  )
}

export default Layout

