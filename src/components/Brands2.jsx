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
            'img': process.env.PUBLIC_URL + '/abocadito.png',
            'title': 'ABOCADITO',
            'subtitle': '“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”',
            'number': '01',
        },
        {
            'img': process.env.PUBLIC_URL + '/kine.png',
            'title': 'Kinne',
            'subtitle': '“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”',
            'number': '02',
        },
        {
            'img': process.env.PUBLIC_URL + '/century.png',
            'title': 'CENTURY 21 BUSANICHE',
            'subtitle': '“Es lindo sentirse acompañada en este proceso de búsqueda y sobre todo de cambio laboral para llevar a Abocadito a otro nivel”',
            'number': '03',
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
                            <img src={item.img} alt="img" />
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