import style from "../Styles/App.module.css";

function App() {
  return (
    <div className={style.App}>
      <div className={style.nav}>
        <a href="#inicio" className={style.text}>
          Inicio
        </a>
        <a href="#sobre-mi" className={style.text}>
          Sobre mí
        </a>
        <a href="#enfoque" className={style.text}>
          Mi enfoque
        </a>
        <a href="#testimonios" className={style.text}>
          Testimonios
        </a>
        <a href="#contacto"className={style.text}>
          Contacto
        </a>
      </div>
      <div className={style.container_logo_img}>
        <img className={style.img_logo} src="/img/logo.png" alt="logo-img"></img>

        <img className={style.img_nati} src="/img/nati.png" alt="nati-img"></img>
      </div>
      <div className={style.line}></div>
    </div>
  );
}

export default App;
