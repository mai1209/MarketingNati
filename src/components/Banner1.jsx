import style from "../Styles/Banner1.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Banner1() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
      once: true,     // la animación se ejecuta solo una vez
    });
  }, []);

  return (
    <div className={style.container_banner}>
      <div className={style.container_all_text}>
        <div className={style.container_text} data-aos="fade-up">
          <p className={style.text}>Crea desde tu <br /> autenticidad</p>
        </div>
        <div className={style.container_text} data-aos="fade-right">
          <p className={style.text2}>Comunicá con <br /> intención</p>
        </div>
        <div className={style.container_text} data-aos="fade-left">
          <p className={style.text3}>Conecta <br /> desde lo humano</p>
        </div>
      </div>
      <div data-aos="fade-up">
        <p className={style.bottom_text}>Crece con estrategia, foco y autenticidad</p>
      </div>
    </div>
  );
}

export default Banner1;
