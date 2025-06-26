import style from "../Styles/Brands.module.css";
import { useEffect, useRef } from "react";
function Brands() {

  // 1. Creamos una referencia para apuntar a nuestro contenedor con scroll.
  const scrollContainerRef = useRef(null);

  // 2. Usamos useEffect para ejecutar la lógica de la animación cuando el componente se cargue.
  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (!scrollElement) return; // Salimos si el elemento no existe

    let animationFrameId;
    let isPaused = false; // Para pausar la animación con el mouse

    const animateScroll = () => {
      // Si está pausado, no hacemos nada
      if (isPaused) {
        animationFrameId = requestAnimationFrame(animateScroll);
        return;
      }

      // Comprobamos el ancho de la ventana para decidir la dirección
      if (window.innerWidth <= 836) {
        // MODO MÓVIL (Scroll Horizontal)
        // Si llegamos al final, volvemos al principio
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth - 1) {
          scrollElement.scrollLeft = 0;
        } else {
          // Movemos el scroll 1px a la derecha
          scrollElement.scrollLeft += 0.5;
        }
      } else {
        // MODO ESCRITORIO (Scroll Vertical)
        // Si llegamos al final, volvemos al principio
        if (scrollElement.scrollTop >= scrollElement.scrollHeight - scrollElement.clientHeight - 1) {
          scrollElement.scrollTop = 0;
        } else {
          // Movemos el scroll 1px hacia abajo
          scrollElement.scrollTop += 0.5;
        }
      }

      // Repetimos la animación en el siguiente frame
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Funciones para pausar y reanudar con el mouse
    const handleMouseEnter = () => isPaused = true;
    const handleMouseLeave = () => isPaused = false;

    scrollElement.addEventListener('mouseenter', handleMouseEnter);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);

    // Iniciamos la animación
    animationFrameId = requestAnimationFrame(animateScroll);

    // Función de limpieza: se ejecuta cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollElement.removeEventListener('mouseenter', handleMouseEnter);
      scrollElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); //


  return (
    <div className={style.container}>
      <div className={style.container_img}>
        <p className={style.text}>MARCAS COLABORADORAS</p>
        <div className={style.containerBrands}>
          {/* Fila 1: Se moverá hacia la izquierda */}
          <div className={`${style.imgContainer} ${style.imgUno}`}>
            {/* Grupo Original */}
            <img src={`${process.env.PUBLIC_URL}/img/img5.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img1.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img2.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img3.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img4.png`} alt="img" />

            {/* Grupo Duplicado */}
            <img src={`${process.env.PUBLIC_URL}/img/img5.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img1.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img2.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img3.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img4.png`} alt="img" />
          </div>
          {/* Fila 2: Se moverá hacia la derecha */}
          <div className={`${style.imgContainer} ${style.imgDos}`}>
            {/* Grupo Original */}
            <img src={`${process.env.PUBLIC_URL}/img/img6.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img7.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img8.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img9.png`} alt="img" />
            {/* Grupo Duplicado */}
            <img src={`${process.env.PUBLIC_URL}/img/img6.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img7.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img8.png`} alt="img" />
            <img src={`${process.env.PUBLIC_URL}/img/img9.png`} alt="img" />
          </div>
        </div>
      </div>


      
      <div id="testimonios" className={style.container_testimonios}>
        <p className={style.titleTestimonios}>Testimonios</p>
        <p className={style.subTitle}>Lo que dicen quienes han trabajado conmigo</p>
        <div ref={scrollContainerRef} className={style.containerTestimoniosAll}>
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
            </div>  <div className={style.textTestimonios}>

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
