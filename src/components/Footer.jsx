import style from "../Styles/Footer.module.css";
import Swal from "sweetalert2";
import { whatsappLink } from "../whatsapp";

function Footer() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        title: "Campos requeridos",
        text: "Por favor, completá todos los campos obligatorios.",
        icon: "warning",
        confirmButtonColor: "#1A535C",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Swal.fire({
        title: "Email inválido",
        text: "Ingresá un correo electrónico válido.",
        icon: "warning",
        confirmButtonColor: "#1A535C",
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
      background: "#ffffff",
      color: "#1A535C",
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
          iconColor: "#B0AD12",
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
        confirmButtonColor: "#1A535C",
      });
    }
  };

  return (
    <footer id="contacto" className={style.container}>
      <div className={style.wrapper}>
        <div className={style.containerContact1}>
          <img
            className={style.logoFooter}
            src="/logo.png"
            alt="Creá Marketing para Vos"
            loading="lazy"
            decoding="async"
          />

          <div className={style.containerInfo}>
            <div className={style.text}>
              <span className={style.kicker}>Contacto</span>
              <p>Tu proyecto con</p>
              <p>estrategia, claridad</p>
              <p>y autenticidad</p>
            </div>
          </div>
        </div>

        <div className={style.containerContact}>
          <div className={style.contactHeading}>
            <span className={style.kicker}>Hablemos</span>
            <h3 className={style.titleContact}>Contactame</h3>
            <p className={style.contactIntro}>
              Si querés ordenar tu comunicación, potenciar tu marca o empezar a
              construir una estrategia más clara, escribime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.formGrid}>
              <div className={style.containerInput}>
                <label htmlFor="name">Nombre completo</label>
                <input type="text" name="name" id="name" required />
              </div>

              <div className={style.containerInput}>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>

            <div className={style.containerInput}>
              <label htmlFor="contact">Instagram o sitio web</label>
              <input type="text" name="contact" id="contact" />
            </div>

            <div className={style.containerInput}>
              <label htmlFor="message">¿En qué puedo ayudarte?</label>
              <textarea name="message" id="message" required></textarea>
            </div>

            <button type="submit" className={style.btn}>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <div className={style.containerIcon}>
        <a
          href="https://www.facebook.com/share/1CNKujuGon/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img src="/Facebook.png" alt="facebook" />
        </a>

        <a
          href={whatsappLink("¡Hola Nati! 👋 Vi tu web y quiero contactarte.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src="/WhatsApp.png" alt="whatsapp" />
        </a>

        <a
          href="https://www.linkedin.com/in/natalialofeudo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/LinkedIn.png" alt="linkedin" />
        </a>

        <a
          href="https://www.instagram.com/creamarketingparavos/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/Instagram.png" alt="instagram" />
        </a>
      </div>

      <div className={style.containerFooter}>
        <p>
          Copyright Natalia Lofeudo (Creá Marketing para Vos) - 2026.
          Todos los derechos reservados.
        </p>

        <a
          href="https://www.letsbuilditcodex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creado por CODEX Corporation & Business R
        </a>
      </div>
    </footer>
  );
}

export default Footer;