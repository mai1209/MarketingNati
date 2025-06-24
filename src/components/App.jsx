import style from "../Styles/App.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { IoIosArrowDropup } from "react-icons/io";
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpDoubleIcon } from '@hugeicons/core-free-icons'
import { IoMdClose, IoMdMenu } from "react-icons/io";



function App() {
  const [showButton, setShowButton] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    console.log("INTENTO DE ABRIR/CERRAR MENÚ");
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
        console.log("BOTÓN DEBERÍA MOSTRARSE (estado: true)"); // <-- AÑADE ESTA LÍNEA
      } else {
        setShowButton(false);
        console.log("BOTÓN DEBERÍA OCULTARSE (estado: false)"); // <-- AÑADE ESTA LÍNEA
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className={style.card}>
      <img className={style.fondoAzul} src="./rectangulosAzul.png" alt="fondo" />
      <nav className={style.nav}>
        <button onClick={toggleMenu} className={style.hamburgerButton}>
          <IoMdMenu size={35} />
        </button>
        <div className={`${style.containerNav} ${isMenuOpen ? style.menuOpen : ''}`}>
          <IoMdClose onClick={toggleMenu} className={style.close} />
          <a href="#sobreMi" onClick={toggleMenu}>Sobre mi</a>
          <a href="#miEnfoque" onClick={toggleMenu}>Mi enfoque</a>
          <a href="#testimonios" onClick={toggleMenu}>Testimonios</a>
          <a href="#contacto" onClick={toggleMenu}>Contacto</a>
        </div>

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
      {showButton && (
        <button onClick={scrollToTop} className={style.arrow}>
          <HugeiconsIcon icon={ArrowUpDoubleIcon} size={55} />
        </button>
      )}

    </div>
  );
}

export default App;
