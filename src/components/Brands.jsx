import style from "../Styles/Brands.module.css";
import { useEffect, useRef } from "react";
import { FaUserCheck } from "react-icons/fa";

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
              <img src={`${process.env.PUBLIC_URL}/user1.jpeg`} alt="img" />
              <p>Nehuen</p>
            </div>
            <div className={style.textTestimonios}>

              <p>"El trabajo con Nati siempre es confianza y evolución. Resuelve problemas en vez de generarlos. Su forma de expresarse, de comunicarse hizo que mi trabajo sea más visible al mundo y genero un crecimiento muy importante para mi profesionalismo.
                Siempre dispuesta a ayudar, sin importar día ni horario. Resolutiva y eficaz. Gracias x este acompañamiento"</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <FaUserCheck />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>


              <p>“Nati quiero agradecerte el apoyo emocional y profesional de ayer. No lo popdriamos haber hecho sin vos. Sos una grosa!!”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
             <img src="/img/img5.png" alt="abocadito" />
              <p>Abocadito</p>
            </div>
            <div className={style.textTestimonios}>
                <p>“Muchas veces nuestro emprendimiento nos atraviesa en todos los aspectos de nuestra vida y es nuestra forma de expresión y transformación, y tener a Nati acompañándome me hizo sentir más fuerte, mas confiada y sin tanto estrés al pensar en las redes sociales como me pasaba antes.”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <FaUserCheck />
              <p>Abocadito</p>
            </div>          <div className={style.textTestimonios}>


              <p>“Hoy complo una meta muy especial, tu has tenido muchísimo que ver en esto. Te agradezco infinitamente lo gran profesional que eres, buena trabajadora y sobre todo, buena amiga.”</p>
            </div>
          </div>
          <div className={style.testimonios}>
            <div className={style.flexTestimonios}>
              <FaUserCheck />
              <p>Abocadito</p>
            </div>  <div className={style.textTestimonios}>


              <p>“Hola bella, estas en el minuto a minuto. Orgullo de verte trabajar por lo que queres.”</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Brands;
