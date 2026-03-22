import LegalLayout from '../../components/legal/LegalLayout'
import { SITE_CONFIG } from '../../config/siteConfig'

const CookiesPage = () => {
  return (
    <LegalLayout title="Politica de cookies" updatedAt={SITE_CONFIG.legalLastUpdated}>
      <section>
        <h2>Uso de cookies y almacenamiento local</h2>
        <p>
          Esta web no utiliza actualmente panel de analitica, publicidad comportamental ni
          formularios con seguimiento comercial.
        </p>
        <p>
          El sitio puede utilizar almacenamiento local del navegador para recordar la respuesta a la
          verificacion de mayoria de edad. Ese dato se usa solo con finalidad tecnica de control de
          acceso.
        </p>
      </section>

      <section>
        <h2>Como gestionar esta informacion</h2>
        <p>
          Puedes borrar el almacenamiento local y las cookies desde la configuracion de tu
          navegador. Al hacerlo, la web volvera a solicitar la confirmacion de mayoria de edad en la
          siguiente visita.
        </p>
      </section>

      <section>
        <h2>Servicios de terceros</h2>
        <p>
          Si accedes a WhatsApp desde los enlaces de esta web, esa plataforma puede aplicar sus
          propias cookies o tecnologias equivalentes conforme a sus condiciones de uso y privacidad.
        </p>
      </section>
    </LegalLayout>
  )
}

export default CookiesPage
