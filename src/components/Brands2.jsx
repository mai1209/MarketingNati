import React from 'react'
import style from '../Styles/Brands2.module.css'


function Brands2() {

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
        <div className={style.container}>
            <h2 className={style.title}>TESTIMONIOS</h2>
            <p className={style.subtitleOne}>Lo que dicen quienes han trabajado conmigo</p>
            <div>
                <div className={style.containerImg}>
                    {testimonios.map((item, index) => (
                        <div className={style.containerInfo} key={index}>
                            <img src={item.img} alt="img" />
                            <h3>{item.title}</h3>
                            <p className={style.subtitle}>{item.subtitle}</p>
                            <p className={style.number}>{item.number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className={style.containerBrands}>
                    {brands.map((item, index) => (
                        <div className={style.containerBrandsImg} key={index}>
                            <img src={item.img} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
            <p className={style.textBottom}>Si crees que es momento de ordenar y potenciar tu marca, estoy lista para acompañarte.</p>
        </div>
    )
}

export default Brands2