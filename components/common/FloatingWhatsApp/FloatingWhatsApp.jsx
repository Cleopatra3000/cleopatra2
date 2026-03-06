import whatsappIcon from '../../../assets/icons/whatsapp.svg'
import styles from './FloatingWhatsApp.module.css'

const WHATSAPP_HREF =
  'https://wa.me/34603257735?text=Hola%20Cleopatra%2C%20me%20gustar%C3%ADa%20invitarte%20a%20comer%2C%20al%20cine%20o%20a%20dar%20un%20paseo.%20%C2%BFLo%20coordinamos%3F'

const FloatingWhatsApp = () => {
  return (
    <a
      className={styles.floating}
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Proponer un plan por WhatsApp"
    >
      <img className={styles.icon} src={whatsappIcon} alt="" aria-hidden="true" />
      <span className={styles.label}>WhatsApp</span>
    </a>
  )
}

export default FloatingWhatsApp
