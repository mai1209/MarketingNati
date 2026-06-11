import style from "../Styles/Banner1.module.css";
import { whatsappLink } from "../whatsapp";

function Banner1() {
  return (
    <section className={style.banner}>
      <div id="conoceme" className={style.aboutSection}>
        <div className={style.container}>
          <div className={style.imageWrap}>
            <img
              className={style.natiImg}
              src="/nati.png"
              alt="Natalia Lofeudo"
              loading="lazy"
              decoding="async"
            />
            <div className={style.imageCard}>
              <span>Marketing & estrategia</span>
              <p>Comunicación con intención, autenticidad y foco.</p>
            </div>
          </div>

          <div className={style.content}>
            <span className={style.kicker}>Sobre mí</span>
            <h2 className={style.title}>Una mirada cercana, estratégica y humana</h2>

            <div className={style.textBlock}>
              <p className={style.text}>
                Soy Natalia, asesora en marketing, comunicación y estrategia
                digital. Mi camino comenzó con un emprendimiento propio en La
                Plata.
              </p>

              <p className={style.text}>
                Viajar, conocer culturas y transitar la maternidad en pandemia
                despertaron mi vocación por el mundo digital.
              </p>

              <p className={style.text}>
                Hoy acompaño a marcas, profesionales y empresas que desean crecer
                de forma auténtica, estratégica y alineada a su esencia. Creo en
                el poder de la conexión humana, la comunicación con propósito y
                la co-creación como motor de transformación.
              </p>
            </div>

            <div className={style.containerAdvice}>
              <div className={style.adviceCard}>
                <p>
                  Comunicá <br /> con intención
                </p>
              </div>

              <div className={style.adviceCard}>
                <p>
                  Creá desde tu <br /> autenticidad
                </p>
              </div>

              <div className={style.adviceCard}>
                <p>
                  Conectá desde <br /> lo humano
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className={style.textBottom}>
          Crecé con estrategia, foco y autenticidad
        </p>
      </div>

      <div id="enfoque" className={style.background}>
        <div className={style.container_advice}>
          <div className={style.visualWrap}>
            <img
              src="/img/imgAdvice.jpg"
              alt="Enfoque estratégico"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={style.infoPanel}>
            <span className={style.kicker}>Enfoque</span>
            <p className={style.text8}>
              Acompaño a empresas, emprendedores y freelancers a construir
              estrategias de marketing y comunicación alineadas con su propósito.
              Estoy acá para ayudarte a ordenar, priorizar y comunicar con
              claridad, a través de procesos estratégicos que respeten la esencia
              de tu marca.
            </p>
          </div>
        </div>

        <div className={style.sideContent}>
          <p className={style.p}>
            Todo adaptado <br /> a vos, con una <br />
            mirada <br /> cercana y <br />
            personalizada
          </p>

          <a
            className={style.containerWhatsApp}
            href={whatsappLink(
              "¡Hola Nati! 👋 Me interesa tu enfoque y quiero saber más sobre cómo trabajás."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.wp} src="/wpBlanco.png" alt="WhatsApp" />
            <span className={style.btnText}>¡Quiero saber más!</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner1;