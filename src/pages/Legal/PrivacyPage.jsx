import LegalLayout from '../../components/legal/LegalLayout'
import { SITE_CONFIG } from '../../config/siteConfig'

const PrivacyPage = () => {
  return (
    <LegalLayout title="Politica de privacidad" updatedAt={SITE_CONFIG.legalLastUpdated}>
      <section>
        <h2>Responsable del tratamiento</h2>
        <p>Nombre o denominacion: {SITE_CONFIG.legalOwnerName}</p>
        <p>Correo de contacto: {SITE_CONFIG.legalEmail}</p>
      </section>

      <section>
        <h2>Que datos se tratan</h2>
        <p>
          A traves de esta web no se recogen formularios. No obstante, pueden tratarse datos
          minimos derivados del uso tecnico del sitio y de la decision almacenada para verificar la
          mayoria de edad.
        </p>
        <p>
          Si la persona usuaria contacta por WhatsApp, se trataran los datos que facilite
          voluntariamente en esa conversacion, como nombre, numero de telefono y contenido del
          mensaje.
        </p>
      </section>

      <section>
        <h2>Finalidad y base juridica</h2>
        <ul>
          <li>Atender solicitudes de contacto y conversaciones iniciadas voluntariamente.</li>
          <li>Gestionar la verificacion de acceso para mayores de edad.</li>
          <li>Proteger la seguridad basica y el funcionamiento tecnico del sitio.</li>
        </ul>
        <p>
          La base juridica es el consentimiento de la persona usuaria al iniciar el contacto y el
          interes legitimo para mantener la seguridad y el correcto funcionamiento de la web.
        </p>
      </section>

      <section>
        <h2>Destinatarios y plataformas de terceros</h2>
        <p>
          El contacto se realiza mediante WhatsApp, servicio prestado por un tercero ajeno a esta
          web. El uso de esa plataforma implica aceptar sus propias condiciones y politica de
          privacidad.
        </p>
      </section>

      <section>
        <h2>Conservacion de los datos</h2>
        <p>
          Los datos se conservaran durante el tiempo necesario para atender la conversacion, cumplir
          obligaciones legales y resolver posibles incidencias. La verificacion de mayoria de edad
          se mantiene en el navegador hasta que la persona usuaria la elimine o cambie de
          dispositivo.
        </p>
      </section>

      <section>
        <h2>Derechos</h2>
        <p>
          Puedes solicitar acceso, rectificacion, supresion, oposicion, limitacion o portabilidad
          escribiendo a {SITE_CONFIG.legalEmail}. Si consideras que tus derechos no han sido
          atendidos correctamente, puedes acudir a la Agencia Espanola de Proteccion de Datos.
        </p>
      </section>
    </LegalLayout>
  )
}

export default PrivacyPage
