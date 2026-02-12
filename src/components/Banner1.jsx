import style from "../Styles/Banner1.module.css";
//import AOS from "aos";
//import "aos/dist/aos.css";
//import { useEffect } from "react";

function Banner1() {
  return (
    <div>
      <div className={style.container_banner}>
        <div className={style.blue}>
          <div className={style.container_all_text}>
            <div className={style.container_text}>
              <p className={style.textBlue1}>
                Crea desde tu <br /> autenticidad
              </p>
            </div>
            <div className={style.container_text}>
              <p className={style.text2}>
                Comunicá con <br /> intención
              </p>
            </div>
            <div className={style.container_text}>
              <p className={style.text3}>
                Conecta <br /> desde lo humano
              </p>
            </div>
          </div>
          <div>
            <p className={style.bottom_text}>
              Te ayudo a ordenar ideas, comunicar con claridad y crecer con
              estrategia y autenticidad
            </p>
          </div>
        </div>

        <div id="conóceme" className={style.container_text2}>
          <h2 className={style.h2}>CONOCE MAS DE MI</h2>

          <p className={style.text}>
            Soy Natalia, asesora en marketing, comunicación y estrategia
            digital.
          </p>

          <p className={style.text}>
            Mi camino comenzó con un emprendimiento propio en La Plata. <br />{" "}
            Viajar, conocer culturas y transitar la maternidad en pandemia
            despertaron mi vocación por el mundo digital.
          </p>

          <p className={style.text}>
            Hoy acompaño a marcas, profesionales y empresas que desean crecer de
            forma auténtica, estratégica y alineada a su esencia.
          </p>

          <p className={style.text}>
            Creo en el poder de la conexión humana, la comunicación con
            propósito y la co-creación como motor de transformación
          </p>

          <div className={style.line}></div>
        </div>
      </div>

      <div id="enfoque" className={style.background}>
        <div
          className={style.container_advice}
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <img
            src="./img/imgAdvice.png"
            alt="fondoadvice"
            data-aos="zoom-out"
            data-aos-delay="20"
          />
          <p className={style.text8} data-aos="fade-up" data-aos-delay="30">
            Acompaño a empresas, emprendedores y freelancers a construir
            estrategias de marketing y comunicación alineadas con su propósito.{" "}
            <br /> Estoy acá para ayudarte a ordenar, priorizar y comunicar con
            claridad, a través de procesos estratégicos que respeten la esencia
            de tu marca.
          </p>
        </div>
        <div>
          <p className={style.p} data-aos="fade-left" data-aos-delay="40">
            Todo adaptado <br /> a vos, con una <br />
            mirada <br /> cercana y <br />
            personalizada
          </p>
          <a
            data-aos="fade-left"
            data-aos-delay="40"
            className={style.containerWhatsApp}
            href="https://wa.me/5492213096523"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.wp} src="/wpBlanco.png" alt="wp" />
            <button className={style.btn}>¡Quiero saber mas!</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
