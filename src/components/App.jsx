  import style from "../Styles/App.module.css";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { useEffect, useState } from "react";

  function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      AOS.init({
        duration: 650,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
        offset: 90,
      });
    }, []);

    const menuItems = [
      { label: "Conoceme", id: "conoceme" },
      { label: "Enfoque", id: "enfoque" },
      { label: "Testimonios", id: "testimonios" },
      { label: "Contacto", id: "contacto" },
    ];

    const textcontent = [
      {
        title: "Creación",
        description: "y edición de contenido auténtico.",
      },
      {
        title: "Gestión",
        description: "de proyectos como Project Manager.",
      },
      {
        title: "Acompañamiento",
        description: "de proyectos como presencial u online.",
      },
      {
        title: "Asesoría",
        description: "de proyectos en marketing y comunicación estratégica.",
      },
      {
        title: "Organización",
        description: "de proyectos y orden interno para emprendedores.",
      },
    ];

    return (
      <div className={style.container}>
        <nav className={style.nav} data-aos="fade-down">
          <img
            onClick={scrollToTop}
            className={style.logo}
            src="/logo.png"
            alt="logo"
          />

          <button
            type="button"
            className={`${style.navBurger} ${
              menuOpen ? style.navBurgerOpen : ""
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`${style.containerItem} ${
              menuOpen ? style.containerItemOpen : ""
            }`}
          >
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                data-aos="fade-left"
                data-aos-delay={180 + index * 70}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <main className={style.main}>
          <section id="inicio" className={style.containerHero}>
            <div
              className={style.backgroundImg}
              data-aos="zoom-out"
              data-aos-delay="120"
            >
              <div className={style.heroOverlay}></div>

              <div className={style.heroInner}>
                <div className={style.textHero}>
                  <h1 data-aos="fade-right" data-aos-delay="240">
                    natalia <br /> lofeudo
                  </h1>

                  <div
                    className={style.textHeroP}
                    data-aos="fade-left"
                    data-aos-delay="320"
                  >
                    <p>creá</p>
                    <p>marketing</p>
                    <p>para</p>
                    <p>vos</p>
                  </div>
                </div>

                <div
                  className={style.heroDescription}
                  data-aos="fade-up"
                  data-aos-delay="420"
                >
                  <p>
                    Estrategia, comunicación y marketing para proyectos que buscan
                    crecer con autenticidad, foco y una identidad clara.
                  </p>

                  <a
                    className={style.heroCta}
                    href="https://wa.me/5492213096523"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/wpBlanco.png" alt="" aria-hidden="true" />
                    Trabajemos juntos
                  </a>
                </div>

                <p
                  className={style.textBottom}
                  data-aos="fade-up"
                  data-aos-delay="520"
                >
                  2026 edition
                </p>
              </div>
            </div>

            <div className={style.containerDescription}>
              {textcontent.map((item, index) => {
                return (
                  <article
                    key={index}
                    className={style.serviceCard}
                    data-aos="fade-up"
                    data-aos-delay={80 + index * 60}
                  >
                    <div className={style.serviceNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </main>

        <button
          type="button"
          className={`${style.scrollToTop} ${isVisible ? style.show : ""}`}
          onClick={scrollToTop}
          title="Volver arriba"
          aria-label="Volver arriba"
        >
          ↑
        </button>

        <a
          href="https://wa.me/5492213096523"
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.scrollToTopWp} ${isVisible ? style.show : ""}`}
          title="Abrir WhatsApp"
          aria-label="Abrir WhatsApp"
        >
          <img src="/wpBlanco.png" alt="WhatsApp" />
        </a>
      </div>
    );
  }

  export default App;