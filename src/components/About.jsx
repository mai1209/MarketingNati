import style from "../Styles/About.module.css";

function About() {
  return (
    <div className={style.container}>
      <div className={style.container_text}>
        <h2>CONOCE MAS DE MI</h2>

        <p className={style.text}>
          {" "}
          Soy Natalia, asesora en marketing, comunicación y estrategia digital.
        </p>

        <p className={style.text}>
          {" "}
          Mi camino comenzó con un emprendimiento propio: un salón de belleza en
          La Plata. Viajar, explorar culturas y vivir la maternidad durante la
          pandemia despertaron en mí una nueva vocación: el mundo digital.
        </p>
        <p className={style.text}>
          {" "}
          Desde entonces, acompaño a marcas, profesionales y empresas que desean
          crecer de forma auténtica, estratégica y alineada a su esencia.
        </p>

        <p className={style.text}>
          {" "}
          Me especializo en crear planes con foco, claridad, compromiso y una
          visión realista.
        </p>

        <p className={style.text}>
          {" "}
          Creo en el poder de la conexión humana, el trabajo colaborativo y la
          co-creación con propósito.
        </p>
        <div className={style.line}></div>
      </div>
    </div>
  );
}

export default About;
