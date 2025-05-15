import style from "../Styles/Banner1.module.css";
function Banner1() {
  return (
    <div className={style.container_banner}>
      <div className={style.container_all_text}>
        {" "}
        <div className={style.container_text}>
          <p className={style.text}>
            Crea desde tu <br /> autenticidad
          </p>
        </div>
        <div className={style.container_text}>
          {" "}
          <p className={style.text2}>
            Comunicá con <br /> intención
          </p>
        </div>
        <div className={style.container_text}>
          {" "}
          <p className={style.text3}>Conecta <br /> desde lo humano</p>
        </div>
      </div>
      <div>
        {" "}
        <p className={style.bottom_text}>Crece con estrategia, foco y autenticidad</p>
      </div>
    </div>
  );
}

export default Banner1;
