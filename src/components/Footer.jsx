import style from "../Styles/Footer.module.css";
import Swal from 'sweetalert2';


function Footer() {

 async function handleSubmit(e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' },
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
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar el mensaje. Intenta nuevamente.',
          icon: 'error',
          confirmButtonColor: '#FF1493',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error de conexión',
        text: 'Hubo un problema de red. Revisa tu conexión e intenta otra vez.',
        icon: 'error',
        confirmButtonColor: '#FF1493',
      });
    } finally {
    
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
        <form  onSubmit={handleSubmit}
          action="https://formsubmit.co/mairacoria1209@gmail.com"
          method="POST" className={style.form} >
          <div className={style.containerInput}>
            <label htmlFor="name">Nombre completo</label>
            <input type="text" name="name" id="name" />
          </div>
            <div className={style.containerInput}>
            <label htmlFor="name">correo electronico</label>
            <input type="text" name="name" id="name" />
          </div>
            <div className={style.containerInput}>
            <label htmlFor="name">instagram o sitio web</label>
            <input type="text" name="name" id="name" />
          </div>
            <div className={style.containerInput}>
            <label htmlFor="name">¿EN QUÉ PUEDO AYUDARTE?</label>
            <input type="text" name="name" id="name" />
          </div>
          <button className={style.btn}>Enviar mensaje</button>
        </form>
      </div>
       
    </div>
 <div className={style.containerIcon}>
          <img src="./Facebook.png" alt="facebook" />
          <img src="./WhatsApp.png" alt="wp" />
          <img src="./Linkedin.png" alt="linkedin" />
          <img src="./Instagram.png" alt="instagram" />
        </div>
     <div className={style.containerFooter}>
      <p>Copyright Natalia Lofeudo (Creá Marketing para vos) - 2025. Todos los derechos reservados.</p>
      <p>Creado por CODEX Corporation & Business R</p>
     </div>

    </div>
   
  )
}

export default Footer;