import style from "../Styles/Banner1.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Banner1() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div className={style.container_banner}>


      <div className={style.blue}>
        <div className={style.container_all_text}>
          <div className={style.container_text} data-aos="fade-up">
            <p className={style.textBlue1}>Crea desde tu <br /> autenticidad</p>
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


      <div id="sobreMi" className={style.container_text2} data-aos="fade-up">
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
      <div id="miEnfoque" className={style.background}>
          <p className={style.text8}>
            Acompaño a empresas, emprendedores y freelancers a construir estrategias
            de marketing y comunicación alineadas con su propósito.Estoy acá para
            ayudarte a ordenar, priorizar y comunicar con claridad, a través de
            procesos estratégicos que respeten la esencia de tu marca.
          </p>
         <p className={style.p}>
            Todo adaptado a vos, con una mirada cercana y personalizada
          </p>
        </div>
      </div>
  );
}

export default Banner1;
