import style from "../Styles/Reviews.module.css";

function Reviews() {
  return (
    <div className={style.container}>
      <h2>Testimonios</h2>
       <p className={style.text}>Lo que dicen quienes han trabajado conmigo</p>

       <div className={style.carrusel}></div>
    </div>
  )
}

export default Reviews
