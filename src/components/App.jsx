import style from "../Styles/App.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className={style.App}>
      <div className={style.nav}>
        <a href="#inicio" className={style.text}>
          Inicio
        </a>
        <a href="#sobre-mi" className={style.text}>
          Sobre mí
        </a>
        <a href="#enfoque" className={style.text}>
          Mi enfoque
        </a>
        <a href="#testimonios" className={style.text}>
          Testimonios
        </a>
        <a href="#contacto" className={style.text}>
          Contacto
        </a>
      </div>
      <div className={style.screen}>
        <div className={style.container_logo_img}>
          <img
            className={style.img_logo}
            data-aos="slide-right" // se mueve desde la izquierda
            data-aos-duration="2000"
            data-aos-delay="100"
            src="/img/logo.png"
            alt="logo-img"
          />

          <img
            className={style.img_nati}
            src="/img/nati.png"
            alt="nati-img"
          ></img>
        </div>
        <div className={style.line} ></div>
      </div>
    </div>
  );
}

export default App;
