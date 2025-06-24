import style from "../Styles/Brands.module.css";

function Brands() {
  return (
    <div className={style.container}>

      <div className={style.container_img}>
        <p className={style.text}>MARCAS COLABORADORAS</p>


        <div className={style.containerBrands}>
          {/* Fila 1: Se moverá hacia la izquierda */}
          <div className={`${style.imgContainer} ${style.imgUno}`}>
            {/* Grupo Original */}
            <img src="/img/img5.png" alt="img-5" />
            <img src="/img/img1.png" alt="img-1" />
            <img src="/img/img2.png" alt="img-2" />
            <img src="/img/img3.png" alt="img-3" />
            <img src="/img/img4.png" alt="img-4" />
            {/* Grupo Duplicado */}
            <img src="/img/img5.png" alt="img-5" />
            <img src="/img/img1.png" alt="img-1" />
            <img src="/img/img2.png" alt="img-2" />
            <img src="/img/img3.png" alt="img-3" />
            <img src="/img/img4.png" alt="img-4" />
          </div>

          {/* Fila 2: Se moverá hacia la derecha */}
          <div className={`${style.imgContainer} ${style.imgDos}`}>
            {/* Grupo Original */}
            <img src="/img/img6.png" alt="img-6" />
            <img src="/img/img7.png" alt="img-7" />
            <img src="/img/img8.png" alt="img-8" />
            <img src="/img/img9.png" alt="img-9" />

            {/* Grupo Duplicado */}
            <img src="/img/img6.png" alt="img-6" />
            <img src="/img/img7.png" alt="img-7" />
            <img src="/img/img8.png" alt="img-8" />
            <img src="/img/img9.png" alt="img-9" />

          </div>
        </div>


      </div>


      <div id="testimonios" className={style.container_testimonios}>
        <p className={style.titleTestimonios}>Testimonios</p>
        <p className={style.subTitle}>Lo que dicen quienes han trabajado conmigo</p>
        <div className={style.containerTestimoniosAll}>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <img src="" alt="brand" />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>
        
              <p>Abocadito puntuó con 5 Estrellas</p>
              <p>“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <img src="" alt="brand" />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>
      
              <p>Abocadito puntuó con 5 Estrellas</p>
              <p>“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <img src="" alt="brand" />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>
       
              <p>Abocadito puntuó con 5 Estrellas</p>
              <p>“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <img src="" alt="brand" />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>
         
              <p>Abocadito puntuó con 5 Estrellas</p>
              <p>“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <img src="" alt="brand" />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>
           
              <p>Abocadito puntuó con 5 Estrellas</p>
              <p>“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”</p>
            </div>
          </div>

          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <img src="" alt="brand" />
              <p>Abocadito</p>
            </div>
            <div className={style.textTestimonios}>

              <p>Abocadito puntuó con 5 Estrellas</p>
              <p>“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
