import style from "../Styles/App.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div  className={style.card}>
      <nav className={style.nav}>
        <div className={style.containerNav}>
          <a href="#sobreMi">Sobre mi</a>
          <a href="#miEnfoque">Mi enfoque</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contacto">Contacto</a>      </div>
        <img className={style.imgLogo} src="./logo.png" alt="logo" />
      </nav>
      <div className={style.container}>

        <div>
          <p className={style.slogan}>crea marketing para vos</p>
          <button className={style.btnMoreInfo}><a href="#btnMoreInfo">quiero saber mas</a></button>
        </div>

        <div className={style.containerInfoNati}>
          <img className={style.img} src="./imgNati.png" alt="nati-img" />
          <p className={style.name}>Natalia Lofeudo</p>
          <p className={style.info}>asesora de marketing y comunicacion</p>
          <button className={style.btnMore}><a href="#btnMore">Quiero saber mas</a></button>
        </div>
        <div className={style.containerDescription}>
          <div className={style.description}>
            <p><span>Creación </span>y edición de contenido <br /> auténtico.</p>
          </div>
          <div className={style.description}>
            <p><span>Gestión </span>de proyectos como Project <br /> Manager.</p>
          </div>
          <div className={style.description}>
            <p><span>Acompañamiento </span>presencial u <br /> online.</p>
          </div>
          <div className={style.description}>
            <p><span>Asesoría </span>en marketing y <br />comunicación estratégica.</p>
          </div>
          <div className={style.description}>
            <p><span>Colaboraciones </span>con <br />equipos o marcas.</p>
          </div>
          <div className={style.description}>
            <p><span>Organización</span> y orden interno  <br />para emprendedores.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
