import style from "../Styles/Footer.module.css";
// 1. Importa la librería que acabas de instalar
import Swal from 'sweetalert2';
import { useState } from "react";

function Footer() {

 // 2. Crea la variable de estado para la carga, justo al inicio del componente
  const [isLoading, setIsLoading] = useState(false);

  // La función está perfecta como la tienes
  async function handleSubmit(event) {
    event.preventDefault();

     // ACTIVAMOS el estado de carga
  setIsLoading(true);

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
    // --- TAMAÑO Y POSICIÓN ---
    position: 'center', // Ya viene por defecto en el medio
    width: '400px',     // La hacemos más angosta (puedes jugar con este valor)

    // --- COLORES ---
    background: '#004d40', // El fondo verde oscuro de tu página
    color: '#ffffff',         // El color del texto en blanco

    // --- CONTENIDO ---
    title: '¡Enviado!',
    text: 'Tu mensaje fue enviado con éxito. Te responderé a la brevedad.',
    icon: 'success',
    iconColor: '#ffd700', // El ícono de check en tu amarillo

    // --- BOTÓN ---
    confirmButtonText: 'Genial',
    confirmButtonColor: '#ffd700', // El botón en tu amarillo

    // --- PARA ESTILOS AVANZADOS (ver paso 2) ---
    customClass: {
      confirmButton: style.mySwalButton, // Clase CSS para el botón (opcional)
      title: style.mySwalTitle,         // Clase CSS para el título (opcional)
    },
    
    // --- FONDO BORROSO (ver paso 2) ---
    showConfirmButton: true, // Muestra el botón para cerrar
    backdrop: true,          // Muestra el fondo oscuro semitransparente
  });
}else {
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
    // DESACTIVAMOS el estado de carga, sin importar si hubo éxito o error
    setIsLoading(false);
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
       <button 
  type="submit" 
  className={style.btnFooter} 
  disabled={isLoading} // El botón se deshabilita mientras se carga
>
  {/* Usamos un operador ternario para cambiar el contenido del botón */}
  {isLoading ? 'Enviando...' : 'Enviar mensaje'}
</button>
        </form >
        
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
  )
}

export default Footer;