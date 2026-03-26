import style from "../Styles/Brands2.module.css";
import "aos/dist/aos.css";

function Brands2() {
  const testimonios = [
    {
      img: process.env.PUBLIC_URL + "/Abocadito.png",
      title: "ABOCADITO",
      subtitle:
        "“Muchas veces nuestro emprendimiento nos atraviesa en todos los aspectos de nuestra vida y es nuestra forma de expresión y transformación y tener a Nati acompañándome me hizo sentir más fuerte, más confiada y sin tanto estrés al pensar en RRSS como me pasaba antes”.",
      number: "01",
    },
    {
      img: process.env.PUBLIC_URL + "/Kuntur Lab.png",
      title: "Kuntur Lab",
      subtitle:
        "“Queremos agradecerte por todo el cariño y empuje que le metiste a este evento. Es hermoso poder contar con gente como tú. Por tu apoyo emocional y profesional. No lo podríamos haber hecho sin vos. Sos una grosa. Vamos a crecer juntas”.",
      number: "02",
    },
    {
      img: process.env.PUBLIC_URL + "/C21Busaniche.png",
      title: "CENTURY 21 BUSANICHE",
      subtitle:
        "“Excelente persona y profesional. En los equipos hay personas que suman y algunos restan. Naty es de las que multiplican. Vamos por un maravilloso 2026”.",
      number: "03",
    },
    {
      img: process.env.PUBLIC_URL + "/La isla de Gi.png",
      title: "La isla de Gi",
      subtitle:
        "“Trabajar con Nati ha sido un antes y un después en mi camino. A diferencia de otras agencias de marketing que se enfocan solo en estrategias, con ella viví un proceso mucho más profundo. Nati me ayudó a reconectar conmigo mismo, a preguntarme quién soy y para qué hago lo que hago, y a traducir esa claridad interior en la forma en que me muestro en redes. Ha sido un cambio transformador, tanto a nivel personal como profesional. Gracias de corazón”.",
      number: "04",
    },
    {
      img: process.env.PUBLIC_URL + "/Amar y Yoga.png",
      title: "Amar y Yoga",
      subtitle:
        "“Natalia, queríamos agradecerte porque nuestra experiencia contigo en estas primeras sesiones ha sido muy positiva. Como equipo, nos encantó poder combinar sesiones conjuntas con momentos individuales, en los que cada una pudo trabajar justo lo que sentía que necesitaba. Gracias por tu claridad, cercanía y por adaptarte tanto a cada una”.",
      number: "05",
    },
    {
      img: process.env.PUBLIC_URL + "/Vero carteras.png",
      title: "Vero carteras",
      subtitle:
        "“Mi modelo exclusiva, estás en el minuto a minuto, orgullosa de verte trabajar por lo que querés. Me encanta todo, enseguida ponés manos a la obra, estás ahí siempre. Sos lo más, Naty”.",
      number: "06",
    },
    {
      img: process.env.PUBLIC_URL + "/Cronos.jpg",
      title: "Cronos",
      subtitle:
        "“Gracias por estar en cada detalle y hacer nuestro trabajo más sencillo”.",
      number: "07",
    },
    {
      img: process.env.PUBLIC_URL + "/Mélany Santandrea.png",
      title: "Mélany Santandrea",
      subtitle:
        "“Un placer colaborar con vos, sos una inmensa mujer, poderosa, inteligente. A tu entera disposición. Vamos a compartir magia a la gente, conexiones reales y emocionales”.",
      number: "08",
    },
    {
      img: process.env.PUBLIC_URL + "/La maca verde.png",
      title: "Lamacaverde",
      subtitle:
        "“Me re encanta todo Nat, también muchísimas gracias por escucharme, por traerme tu experiencia y por apoyarme en mi proyecto. Por primera vez me siento acompañada. Por primera vez siento que tengo una fan. En pocas palabras, por primera vez no me siento sola. Gracias, qué regalo haberte encontrado y poder tenerte en este camino”.",
      number: "09",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div id="testimonios" className={style.container}>
          <div className={style.heading}>
            <span className={style.kicker}>Testimonios</span>
            <h2 className={style.title}>Lo que dicen quienes trabajaron conmigo</h2>
            <p className={style.subtitleOne}>
              Procesos reales, vínculos genuinos y marcas acompañadas con estrategia,
              cercanía y autenticidad.
            </p>
          </div>

          <div className={style.containerImg}>
            {testimonios.map((item, index) => (
              <article className={style.containerInfo} key={index}>
                <div className={style.topRow}>
                  <div className={style.img}>
                    <img src={item.img} alt={item.title} />
                  </div>

                  <div className={style.topInfo}>
                    <h3>{item.title}</h3>
                    <p className={style.number}>{item.number}</p>
                  </div>
                </div>

                <p className={style.subtitle}>{item.subtitle}</p>
              </article>
            ))}
          </div>

          <p className={style.textBottom}>
            Si creés que es momento de ordenar y potenciar tu marca, estoy lista
            para acompañarte.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Brands2;