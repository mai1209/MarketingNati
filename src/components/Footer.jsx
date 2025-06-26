import style from "../Styles/Footer.module.css";
// 1. Importa la librería que acabas de instalar
import Swal from 'sweetalert2';

function Footer() {
  // La función está perfecta como la tienes
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        
        Swal.fire({
          title: '¡Enviado!',
          text: 'Tu mensaje fue enviado con éxito. Te responderemos a la brevedad.',
          icon: 'success',
          confirmButtonText: 'Genial',
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
    }
  }

  return (
    <div className={style.container}>
      
      <div id="btnMore" className={style.p}><p>Si crees que es momento de ordenar y potenciar tu marca, estoy lista para acompañarte.</p></div>
      <img className={style.imageNatiMobil} src={`${process.env.PUBLIC_URL}/imageNati.png`} alt="img-nati" />
      <div id="btnMoreInfo" className={style.containerAll}>
        
        {/*
          AQUÍ ESTÁ LA CORRECCIÓN:
          Añadimos el atributo onSubmit para conectar nuestra función al formulario.
        */}
        <form id="contacto" action="https://formsubmit.co/maidev1209@gmail.com" method="POST" onSubmit={handleSubmit}>
          
          <input type="text" name="nombre" placeholder="Nombre completo – (campo obligatorio)" required/>
          <input type="email" name="email" placeholder="Correo electrónico – (campo obligatorio)" required/>
          <input type="text" name="instagram" placeholder="Instagram o sitio web – (opcional, para conocer su marca)" />
          <textarea rows="6" cols="10" name="mensaje" placeholder="¿En qué puedo ayudarte? - Escriba su mensaje aquí" required/>
          <button type="submit" className={style.btnFooter}>Enviar mensaje</button>
        </form >
        
        <div className={style.containerForm}>
          <div className={style.mail}>
            <img className={style.imgCorreo} src={`${process.env.PUBLIC_URL}/mail.png`} alt="whatsapp" />
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
                <div className={style.containerRedes} > 
                  <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/Facebook.png`} alt="facebook" />
                  <a href="https://www.linkedin.com/in/natalialofeudo/">Facebook</a>
                </div>
              </div>
              <div className={style.dos}>
                <div className={style.containerRedes}>
                  <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/WhatsApp.png`} alt="whatsapp" />
                  <a href="https://wa.me/5492213096523">WhatsApp</a>
                </div>
                <div className={style.containerRedes}> 
                  <img className={style.imgRedes} src={`${process.env.PUBLIC_URL}/Linkedin.png`} alt="linkeding" />
                  <a href="https://www.linkedin.com/in/natalialofeudo/">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={style.imageNati} src={`${process.env.PUBLIC_URL}/imageNati.png`} alt="img-nati" />
    </div>
  )
}

export default Footer;