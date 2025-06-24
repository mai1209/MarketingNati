import style from "../Styles/Footer.module.css"

function Footer() {
  return (
    <div className={style.container}>
      <div id="btnMore" className={style.p}><p>Si crees que es momento de ordenar y potenciar tu marca, estoy lista para acompañarte.</p></div>
      <div id="btnMoreInfo" className={style.containerAll}>
        <form id="contacto" action="send">
          <input type="text" placeholder="Nombre completo – (campo obligatorio)" />
          <input type="text" placeholder="Correo electrónico – (campo obligatorio)" />
          <input type="text" placeholder="Instagram o sitio web – (opcional, para conocer su marca)" />
          <textarea rows="6" cols="10" type="text" placeholder="¿En qué puedo ayudarte? - Escriba su mensaje aquí" />
          <button className={style.btnFooter}>Enviar mensaje</button>
        </form >
        <div className={style.containerForm}>
          <div className={style.mail}>
            <img className={style.imgCorreo} src="./mail.png" alt="correo" />
            <p>Agenda una reunion</p>
          </div>
          <div className={style.social}>
            <p className={style.socialText}>Contactame por redes sociales</p>
            <div className={style.redes}>
              <div className={style.uno}>
                <div className={style.containerRedes}> <img className={style.imgRedes} src="./Instagram.png" alt="instagram" /> <a href="https://www.instagram.com/creamarketingparavos">Instagram</a></div>
                <div className={style.containerRedes} > <img className={style.imgRedes} src="./Facebook.png" alt="instagram" />  <a href="https://www.linkedin.com/in/natalialofeudo/">Facebook</a></div>
              </div>
              <div className={style.dos}>
                <div className={style.containerRedes}>
                  <img className={style.imgRedes} src="./WhatsApp.png" alt="instagram" />
                  <a href="https://wa.me/5492213096523">WhatsApp</a>
                </div>
                <div className={style.containerRedes}> <img className={style.imgRedes} src="./LinkedIn.png" alt="instagram" />  <a href="https://www.linkedin.com/in/natalialofeudo/">LinkedIn</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <img className={style.imageNati} src="./imageNati.png" alt="nati" />
    </div>
  )
}

export default Footer



