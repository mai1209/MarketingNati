import style from "../Styles/About.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.container_text} data-aos="fade-up">
        <h2 className={style.h2} data-aos="fade-down">CONOCE MAS DE MI</h2>

        <p className={style.text} data-aos="fade-right">
          Soy Natalia, asesora en marketing, comunicación y estrategia digital.
        </p>

        <p className={style.text} data-aos="fade-left">
          Mi camino comenzó con un emprendimiento propio: un salón de belleza en
          La Plata. Viajar, explorar culturas y vivir la maternidad durante la
          pandemia despertaron en mí una nueva vocación: el mundo digital.
        </p>

        <p className={style.text} data-aos="fade-right">
          Desde entonces, acompaño a marcas, profesionales y empresas que desean
          crecer de forma auténtica, estratégica y alineada a su esencia.
        </p>

        <p className={style.text} data-aos="fade-left">
          Me especializo en crear planes con foco, claridad, compromiso y una
          visión realista.
        </p>

        <p className={style.text} data-aos="fade-up">
          Creo en el poder de la conexión humana, el trabajo colaborativo y la
          co-creación con propósito.
        </p>

        <div className={style.line} data-aos="zoom-in"></div>
      </div>
    </div>
  );
}


export default About;
