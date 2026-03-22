import LegalLayout from '../../components/legal/LegalLayout'
import { SITE_CONFIG } from '../../config/siteConfig'

const LegalNoticePage = () => {
  return (
    <LegalLayout title="Aviso legal" updatedAt={SITE_CONFIG.legalLastUpdated}>
      <section>
        <h2>Titular del sitio web</h2>
        <p>Nombre o denominacion: {SITE_CONFIG.legalOwnerName}</p>
        <p>NIF/CIF: {SITE_CONFIG.legalTaxId}</p>
        <p>Domicilio: {SITE_CONFIG.legalAddress}</p>
        <p>Correo de contacto: {SITE_CONFIG.legalEmail}</p>
      </section>

      <section>
        <h2>Objeto</h2>
        <p>
          Esta web tiene finalidad informativa y de presentacion personal para personas adultas
          interesadas en contactar de forma voluntaria para planes sociales y de ocio legal en
          Madrid.
        </p>
        <p>
          El contenido de esta web no ofrece ni publicita servicios sexuales, actividades ilicitas
          ni propuestas contrarias a la ley.
        </p>
      </section>

      <section>
        <h2>Condiciones de uso</h2>
        <p>
          El acceso a esta web queda reservado a personas mayores de edad. La persona usuaria se
          compromete a realizar un uso licito, respetuoso y conforme a la normativa aplicable.
        </p>
        <p>
          El titular puede actualizar los contenidos del sitio cuando resulte necesario para mejorar
          la informacion ofrecida o adaptarla a cambios legales y operativos.
        </p>
      </section>

      <section>
        <h2>Propiedad intelectual e imagen</h2>
        <p>
          Los textos, imagenes y elementos visuales de esta web pertenecen a su titular o se usan
          con autorizacion suficiente. Queda prohibida su reproduccion, distribucion o reutilizacion
          sin permiso expreso.
        </p>
      </section>

      <section>
        <h2>Responsabilidad</h2>
        <p>
          La informacion publicada tiene caracter general y no constituye oferta contractual cerrada
          ni asesoramiento legal. Cualquier acuerdo concreto se tratara de forma individual y
          conforme a la legalidad vigente.
        </p>
      </section>
    </LegalLayout>
  )
}

export default LegalNoticePage
