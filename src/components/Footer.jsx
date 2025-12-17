import style from "../Styles/Footer.module.css";
import Swal from "sweetalert2";

function Footer() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validaciones
    if (!name || !email || !message) {
      Swal.fire({
        title: "Campos requeridos",
        text: "Por favor, completá todos los campos obligatorios.",
        icon: "warning",
        confirmButtonColor: "#FF1493",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Swal.fire({
        title: "Email inválido",
        text: "Ingresá un correo electrónico válido.",
        icon: "warning",
        confirmButtonColor: "#FF1493",
      });
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "dd17226e-1f9e-441a-9625-33f143af0212");
    formData.append("subject", "Nuevo mensaje desde el sitio web");
    formData.append("from_name", "Creá Marketing para Vos");

    Swal.fire({
      title: "Enviando mensaje...",
      text: "Por favor esperá",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarte, te responderé pronto.",
          icon: "success",
          background: "#1C1C1C",
          color: "#fff",
          confirmButtonColor: "#1A535C",
          confirmButtonText: "Genial",
          iconColor: "#1A535C",
        });
      } else {
        throw new Error(data.message || "Error al enviar");
      }

    } catch (error) {
      console.error("Web3Forms error:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Intentá nuevamente.",
        icon: "error",
        confirmButtonColor: "#FF1493",
      });
    }
  };

  return (
    <div id="contacto" className={style.container}>
      <div className={style.wrapper}>

        <div className={style.containerContact1}>
          <img className={style.logoFooter} src="./logo.png" alt="logo" />

          <div className={style.containerInfo}>
            <div className={style.circle}></div>
            <div className={style.text}>
              <p>tu proyecto con</p>
              <p>estrategia, claridad y</p>
              <p>autenticidad</p>
            </div>
          </div>
        </div>

        <div className={style.containerContact}>
          <h3 className={style.titleContact}>Contactame</h3>

          <form onSubmit={handleSubmit} className={style.form}>
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

            <button type="submit" className={style.btn}>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <div className={style.containerIcon}>
        <a href="https://www.facebook.com/share/1CNKujuGon/?mibextid=wwXIfr">
          <img src="./Facebook.png" alt="facebook" />
        </a>
        <a
          href="https://wa.me/5492213096523"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./WhatsApp.png" alt="whatsapp" />
        </a>
        <a
          href="https://www.linkedin.com/in/natalialofeudo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./LinkedIn.png" alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/creamarketingparavos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./Instagram.png" alt="instagram" />
        </a>
      </div>

      <div className={style.containerFooter}>
        <p>
          Copyright Natalia Lofeudo (Creá Marketing para vos) - 2025.
          Todos los derechos reservados.
        </p>
        <p>Creado por CODEX Corporation & Business R</p>
      </div>
    </div>
  );
}

export default Footer;
