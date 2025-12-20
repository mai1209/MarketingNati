import React from 'react'
import style from '../Styles/Brands2.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Brands2() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
            once: true,
            mirror: false,
            offset: 100
        });
    }, []);

    const testimonios = [
        {
            'img': process.env.PUBLIC_URL + '/Abocadito.png',
            'title': 'ABOCADITO',
            'subtitle': ' “Muchas veces nuestro emprendimiento nos atraviesa en todos los aspectos de nuestra vida y es nuestra forma de expresión y transformación y tener a Nati acompañándome me hizo sentir más fuerte, más confiada y sin tanto estrés al pensar en RRSS como me pasaba antes” ',
            'number': '01',
        },
        {
            'img': process.env.PUBLIC_URL + '/Kuntur Lab.png',
            'title': 'Kuntur Lab: ',
            'subtitle': '“Queremos agradecerte por todo el cariño y empuje que le metiste a este evento. Es hermoso poder contar con gente como tú. Por tu apoyo emocional y profesional. No lo podríamos haber hecho sin vos. Sos una grosa. Vamos a crecer juntas”',
            'number': '02',
        },
        {
            'img': process.env.PUBLIC_URL + '/C21Busaniche.png', 
            'title': 'CENTURY 21 BUSANICHE',
            'subtitle': '“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”',
            'number': '03',
        },
          {
            'img': process.env.PUBLIC_URL + '/La isla de Gi.png',
            'title': 'La isla de Gi:',
            'subtitle': '  “Trabajar con Nati ha sido un antes y un después en mi camino. A diferencia de otras agencias de marketing que se enfocan solo en estrategias, con ella viví un proceso mucho más profundo. Nati me ayudó a reconectar conmigo mismo, a preguntarme ¿Quién soy? ¿Para qué hago lo que hago? Y a traducir esa claridad interior en la forma en que me muestro en redes. Ha sido un cambio transformador, tanto a nivel personal como profesional. Gracias de corazón!” ',
             'number': '04',
        },
          {
            'img': process.env.PUBLIC_URL + '/Amar y Yoga.png',
            'title': 'Amar y Yoga:',
            'subtitle': '   “Natalia queríamos agradecerte porque nuestra experiencia contigo en estas primeras sesiones ha sido muy positiva. Como equipo, nos encantó poder combinar sesiones conjuntas como momentos individuales, en los que cada una pudo trabajar justo lo que sentía que necesitaba. Yo Ruth, aunque no me cuesta hablar en público, si sentía que la cámara me frenaba. Me parecía algo impersonal y eso me cortaba la inspiración y la fluidez para ser yo misma. Gracias a ti, empecé a sentirlo de forma más natural. Me ayudó mucho tu propuesta de comenzar leyendo textos que me apeteciera compartir.. Fue una puerta de entrada muy amable y efectiva. Poco a poco, empiezo a sentirme más cómoda. Y yo, Marta, necesitaba ordenarme. Me sentía un poco abrumada con todo lo que tenía que hacer y tu me ayudaste a organizarme mejor con el calendario. También me diste tips muy prácticos para no agobiarme y para grabar y editar reels de forma más ligera. Siento que ahora el proceso es más manejable. Gracias por tu claridad, cercanía y por adaptarte tanto a cada una” ',
             'number': '05',
        },
           {
            'img': process.env.PUBLIC_URL + '/Vero carteras.png',
            'title': 'Vero carteras: ',
            'subtitle': ' “Mi modelo exclusiva, estás en el minuto a minuto, orgullosa de verte trabajar por lo que querés. Me encanta todo, enseguida ponés manos a la obra, estás ahí siempre. Sos lo mas Naty” ',
             'number': '06',
        },
           {
            'img': process.env.PUBLIC_URL + '/Cronos.jpg',
            'title': 'Cronos: ',
            'subtitle': ' “Gracias por estar en cada detalle y hacer nuestro trabajo más sencillo” ',
             'number': '07',
        },
      
          {
            'img': process.env.PUBLIC_URL + '/Mélany Santandrea.png',
            'title': 'Mélany Santandrea:  ',
            'subtitle': '  “Un placer colaborar con vos, sos una inmensa mujer, poderosa, inteligente. A tu entera disposición. Vamos a compartirle magia a la gente, conexiones reales y emocionales.” ',
             'number': '08',
        },
        {
            'img': process.env.PUBLIC_URL + '/La maca verde.png',
            'title': 'Lamacaverde:   ',
            'subtitle': '  “Me re encanta todo Nat, también muchísimas gracias por escucharme, por traerme tu experiencia y por apoyarme en mi proyecto. Por primera vez me siento acompañada. Por primera vez siento que tengo una fan (como alguien que está en las escaleras con carteles gritando “Tú puedes”). En pocas palabras por primera vez no me siento sola, no me siento una loca que quiere ganar una maratón. Gracias, que regalo haberte encontrado y poder tenerte en este camino” ',
             'number': '09',
        },
    ]

    const brands = [
        { 'img': process.env.PUBLIC_URL + '/img/img1.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img2.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img3.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img4.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img5.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img6.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img7.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img8.png', },
        { 'img': process.env.PUBLIC_URL + '/img/img9.png', },
    ]

    return (
        <div id='testimonios' className={style.container}>
            <h2 className={style.title} data-aos="fade-down">TESTIMONIOS</h2>
            <p className={style.subtitleOne} data-aos="fade-down" data-aos-delay="100">Lo que dicen quienes han trabajado conmigo</p>
            
            <div data-aos="fade-up">
                <div className={style.containerImg}>
                    {testimonios.map((item, index) => (
                        <div 
                            className={style.containerInfo} 
                            key={index}
                            data-aos="flip-left" 
                            data-aos-delay={200 + (index * 150)}
                            data-aos-duration="800"
                        >
                           <div className={style.img}> <img src={item.img} alt="img" /></div>
                            <h3>{item.title}</h3>
                            <p className={style.subtitle}>{item.subtitle}</p>
                            <p className={style.number}>{item.number}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
                <div className={style.containerBrands}>
                    {brands.map((item, index) => (
                        <div 
                            className={style.containerBrandsImg} 
                            key={index}
                            data-aos="zoom-in" 
                            data-aos-delay={400 + (index * 50)}
                            data-aos-duration="600"
                        >
                            <img src={item.img} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
            
            <p className={style.textBottom} data-aos="fade-up" data-aos-delay="500">
                Si crees que es momento de ordenar y potenciar tu marca, estoy lista para acompañarte.
            </p>
        </div>
    )
}

export default Brands2