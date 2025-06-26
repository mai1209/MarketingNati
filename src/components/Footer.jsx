import style from "../Styles/Footer.module.css";
import Swal from 'sweetalert2';
import { useState } from "react";

function Footer() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        Swal.fire({
          position: 'center',
          width: '400px',
          background: '#004d40',
          color: '#ffffff',
          title: '¡Enviado!',
          text: 'Tu mensaje fue enviado con éxito. Te responderé a la brevedad.',
          icon: 'success',
          iconColor: '#ffd700',
          confirmButtonText: 'Genial',
          confirmButtonColor: '#ffd700',
          customClass: {
            confirmButton: style.mySwalButton,
            title: style.mySwalTitle,
          },
          showConfirmButton: true,
          backdrop: true,
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error de Conexión',
        text: 'No pudimos conectarnos para enviar tu mensaje. Revisa tu conexión a internet.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // ===== INICIO DE LA ESTRUCTURA CORREGIDA =====
    // El .container ahora envuelve TODO, incluyendo el footer de copyright.
    <div className={style.container}>
      
      {/* Este nuevo div agrupa todo el contenido principal */}
      <div className={style.mainContent}>
        <div id="btnMore" className={style.p}>
          <p>Si crees que es momento de ordenar y potenciar tu marca, estoy lista para acompañarte.</p>
        </div>
        <img className={style.imageNatiMobil} src={`${process.env.PUBLIC_URL}/imageNati.png`} alt="img-nati" />
        <div id="btnMoreInfo" className={style.containerAll}>
          <form id="contacto" action="https://formsubmit.co/maidev1209@gmail.com" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre completo – (campo obligatorio)" required />
            <input type="email" name="email" placeholder="Correo electrónico – (campo obligatorio)" required />
            <input type="text" name="instagram" placeholder="Instagram o sitio web – (opcional, para conocer su marca)" />
            <textarea rows="6" cols="10" name="mensaje" placeholder="¿En qué puedo ayudarte? - Escriba su mensaje aquí" required />
            <button type="submit" className={style.btnFooter} disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
          <div className={style.containerForm}>
            <div className={style.mail}>
              <img className={style.imgCorreo} src={`${process.env.PUBLIC_URL}/Mail.png`} alt="mail" />
              <p>Agenda una reunion</p>
            </div>
            <div className={style.social}>
              <p className={style.socialText}>Contactame por redes sociales</p>
              <div className={style.redes}>
                <div className={style.uno}>
                  <div className={style.containerRedes}>
                    <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/Instagram.png`} alt="instagram" />
                    <a href="https://www.instagram.com/creamarketingparavos">Instagram</a>
                  </div>
                  <div className={style.containerRedes}>
                    <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/Facebook.png`} alt="facebook" />
                    <a href="https://www.facebook.com/share/1CNKujuGon/?mibextid=wwXIfr">Facebook</a>
                  </div>
                </div>
                <div className={style.dos}>
                  <div className={style.containerRedes}>
                    <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/WhatsApp.png`} alt="whatsapp" />
                    <a href="https://wa.me/5492213096523">WhatsApp</a>
                  </div>
                  <div className={style.containerRedes}>
                    <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/LinkedIn.png`} alt="linkeding" />
                    <a href="https://www.linkedin.com/in/natalialofeudo/">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={style.imageNati} src={`${process.env.PUBLIC_URL}/imageNati.png`} alt="img-nati" />
      </div>

      {/* El footer de copyright ahora está DENTRO del .container */}
      <div className={style.footerCodex}>
        <p>Copyright Natalia Lofeudo (Creá Marketing para vos) - 2025. Todos los derechos reservados.</p>
        <div className={style.codexLogo}>
          <p>Creado por</p>
          <img className={style.codex} src={`${process.env.PUBLIC_URL}/img/logoCodex.png`} alt="logo-codex" />{"< CODEX-Astra />"}
        </div>
      </div>
    </div>
    // ===== FIN DE LA ESTRUCTURA CORREGIDA =====
  )
}

export default Footer;