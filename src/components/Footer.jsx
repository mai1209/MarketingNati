import style from "../Styles/Footer.module.css";
import Swal from 'sweetalert2';


function Footer() {

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;  // MOVER ESTA LÍNEA AL INICIO

    // Validación
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        title: 'Campos requeridos',
        text: 'Por favor, completá todos los campos obligatorios.',
        icon: 'warning',
        confirmButtonColor: '#FF1493',
      });
      return;
    }

    // Validación de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Swal.fire({
        title: 'Email inválido',
        text: 'Por favor, ingresa un correo electrónico válido.',
        icon: 'warning',
        confirmButtonColor: '#FF1493',
      });
      return;
    }

    const formData = new FormData(form);

    try {
      // Agregar parámetros adicionales para formsubmit
      formData.append('_template', 'table');
      formData.append('_autoresponse', 'Gracias por tu mensaje. Te responderé pronto.');

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        form.reset();
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarte, te responderé pronto.',
          icon: 'success',
          background: '#1C1C1C',
          color: '#fff',
          confirmButtonColor: '#1A535C',
          confirmButtonText: 'Genial',
          iconColor: '#1A535C',
          customClass: {
            popup: 'swal-custom',
            confirmButton: 'swal-confirm-btn'
          }
        });
      } else {
        const error = await response.text();
        console.error('Error del servidor:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar el mensaje. Intenta nuevamente.',
          icon: 'error',
          confirmButtonColor: '#FF1493',
        });
      }
    } catch (error) {
      console.error('Error de red:', error);
      Swal.fire({
        title: 'Error de conexión',
        text: 'Hubo un problema de red. Revisa tu conexión e intenta otra vez.',
        icon: 'error',
        confirmButtonColor: '#FF1493',
      });
    }
  }

  return (
    <div id='contacto' className={style.container}>
      <div className={style.wrapper}>
        <div className={style.containerContact1}>
          <img className={style.logoFooter} src="./logo.png" alt="logo" />
          <div className={style.containerInfo}>
            <div className={style.circle}></div>
            <div className={style.text}>
              <p>tu proyecto con </p>
              <p>estrategia, claridad y</p>
              <p>autenticidad</p>
            </div>
          </div>

        </div>

        <div className={style.containerContact}>
          <h3 className={style.titleContact}>Contactame</h3>
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/mairacoria1209@gmail.com"
            method="POST"
            className={style.form}
          >


            {/* Campo oculto para evitar spam */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Campo oculto para el subject del email */}
            <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />

            <div className={style.containerInput}>
              <label htmlFor="name">Nombre completo</label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className={style.containerInput}>
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" name="email" id="email" required />
            </div>

            <div className={style.containerInput}>
              <label htmlFor="contact">Instagram o sitio web</label>
              <input type="text" name="contact" id="contact" />
            </div>

            <div className={style.containerInput}>
              <label htmlFor="message">¿EN QUÉ PUEDO AYUDARTE?</label>
              <textarea name="message" id="message" required></textarea>
            </div>

            <button type="submit" className={style.btn}>Enviar mensaje</button>
          </form>
        </div>

      </div>
      <div className={style.containerIcon}>
        <a href="https://www.facebook.com/share/1CNKujuGon/?mibextid=wwXIfr"> <img src="./Facebook.png" alt="facebook" /></a>
        <a  href="https://wa.me/5492213096523" target="_blank" rel="noopener noreferrer"> <img src="./WhatsApp.png" alt="wp" /></a>
        <a  href="https://www.linkedin.com/in/natalialofeudo/" target="_blank" rel="noopener noreferrer">   <img src="./LinkedIn.png" alt="linkedin" /></a>
        <a href="https://www.instagram.com/creamarketingparavos/" target="_blank" rel="noopener noreferrer">  <img src="./Instagram.png" alt="instagram" /></a>
      </div>
      <div className={style.containerFooter}>
        <p>Copyright Natalia Lofeudo (Creá Marketing para vos) - 2025. Todos los derechos reservados.</p>
        <p>Creado por CODEX Corporation & Business R</p>
      </div>

    </div>

  )
}

export default Footer;