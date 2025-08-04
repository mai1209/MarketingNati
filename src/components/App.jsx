import style from "../Styles/App.module.css";
import "aos/dist/aos.css";

function App() {
  const menuItems = [
    'Conóceme',
    'Enfoque',
    'Testimonios',
    'Contacto',
  ]

  const textcontent = [
    {
      'title': 'Creación',
      'description': 'y edición de contenidoauténtico.',
    },
    {
      'title': 'Gestión',
      'description': 'de proyectos como ProjectManager.',
    },
    {
      'title': 'Acompañamiento',
      'description': 'de proyectos como presencial uonline..',
    },
    {
      'title': 'Asesoría',
      'description': 'de proyectos como en marketing ycomunicación estratégica..',
    },
    {
      'title': 'Organización',
      'description': 'de proyectos como y orden internopara emprendedores..',
    },
  ]

  return (
    <div className={style.container}>
      <nav>
        <img className={style.logo} src="/logo.png" alt="logo" />
        <div className={style.containerItem}>
          {menuItems.map((item, index) => {
            const itemId = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index}>
                <a href={`#${itemId}`}>{item}</a>
              </div>
            );
          })}
        </div>
      </nav>
      <div className={style.containerHero}>
        <div className={style.backgroundImg}>
          <div className={style.textHero}>
            <h2>natalia <br /> lofeudo</h2>
            <div className={style.textHeroP}>
              <p>creá</p>
              <p>marketing</p>
              <p>para</p>
              <p>vos</p>
            </div>
          </div>
          <p className={style.textBottom}>2025 edition</p>
        </div>
        <div className={style.containerDescription}>
          {textcontent.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  );
}

export default App;
