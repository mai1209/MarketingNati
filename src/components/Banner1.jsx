import style from "../Styles/Banner1.module.css";
//import AOS from "aos";
//import "aos/dist/aos.css";
//import { useEffect } from "react";

function Banner1() {
  return (
    <div id="conóceme" className={style.banner}>
      <div className={style.container}>
        <img className={style.natiImg} src="/nati.png" alt="nati" />
        <div>
          <h2 className={style.title}>Sobre mi</h2>
          <p className={style.text}>
            Soy Natalia, asesora en marketing, comunicación y estrategia
            digital. <br />
            Mi camino comenzó con un emprendimiento propio en La Plata.
          </p>
          <p className={style.text}>
            Viajar, conocer culturas y transitar la maternidad en pandemia
            despertaron mi vocación por el mundo digital.
          </p>
          <p className={style.text}>
            Hoy acompaño a marcas, profesionales y empresas que desean crecer de
            forma auténtica, estratégica y alineada a su esencia. <br />
            Creo en el poder de la conexión humana, la comunicación con
            propósito y la co-creación como motor de transformación
          </p>
          <div className={style.containerAdvice}>
            <p>Comunicá <br /> con intención</p>
            <p>Crea desde tu <br /> autenticidad</p>
            <p>Conecta desde  <br />lo humano</p>
          </div>
        </div>
      </div>
      <p className={style.textBottom}>Crece con estrategia, foco y autenticidad</p>

      <div id="enfoque" className={style.background}>
        <div className={style.container_advice}>
          <img src="./img/imgAdvice.png" alt="fondoadvice" />
          <p className={style.text8}>
            Acompaño a empresas, emprendedores y freelancers a construir
            estrategias de marketing y comunicación alineadas con su propósito.{" "}
            <br /> Estoy acá para ayudarte a ordenar, priorizar y comunicar con
            claridad, a través de procesos estratégicos que respeten la esencia
            de tu marca.
          </p>
        </div>
        <div>
          <p className={style.p}>
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
