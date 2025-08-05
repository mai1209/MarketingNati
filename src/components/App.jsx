import style from "../Styles/App.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function App() {



  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll suave al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      offset: 120
    });
  }, []);

  const menuItems = [
    'Conóceme',
    'Enfoque',
    'Testimonios',
    'Contacto',
  ]

  const textcontent = [
    {
      'title': 'Creación',
      'description': 'y edición de contenido auténtico.',
    },
    {
      'title': 'Gestión',
      'description': 'de proyectos como Project Manager.',
    },
    {
      'title': 'Acompañamiento',
      'description': 'de proyectos como presencial u online.',
    },
    {
      'title': 'Asesoría',
      'description': 'de proyectos en marketing y comunicación estratégica.',
    },
    {
      'title': 'Organización',
      'description': 'de proyectos y orden interno para emprendedores.',
    },
  ]

  return (
    <div className={style.container}>
      <nav data-aos="fade-down" data-aos-delay="100">
        <img onClick={scrollToTop} className={style.logo} src="/logo.png" alt="logo" data-aos="zoom-in" data-aos-delay="300" />
        <div className={style.containerItem}>
          {menuItems.map((item, index) => {
            const itemId = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index} data-aos="fade-left" data-aos-delay={400 + (index * 100)}>
                <a href={`#${itemId}`}>{item}</a>
              </div>
            );
          })}
        </div>
      </nav>
      <div className={style.containerHero}>
        <div className={style.backgroundImg} data-aos="zoom-out" data-aos-delay="500">
          <div className={style.textHero}>
            <h2 data-aos="fade-right" data-aos-delay="600">natalia <br /> lofeudo</h2>
            <div className={style.textHeroP} data-aos="fade-left" data-aos-delay="700">
              <p>creá</p>
              <p>marketing</p>
              <p>para</p>
              <p>vos</p>
            </div>
          </div>
          <p className={style.textBottom} data-aos="fade-up" data-aos-delay="800">2025 edition</p>
        </div>
        <div className={style.containerDescription}>
          {textcontent.map((item, index) => {
            return (
              <div key={index} 
                   data-aos="fade-up" 
                   data-aos-delay={900 + (index * 150)}
                   data-aos-anchor-placement="top-bottom">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
         <div 
      className={`${style.scrollToTop} ${isVisible ? style.show : ''}`} 
      onClick={scrollToTop}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      ↑
    </div>
    </div>
  );
}

export default App;