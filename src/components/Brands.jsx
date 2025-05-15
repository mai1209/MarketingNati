import style from "../Styles/Brands.module.css";

function Brands() {
  return (
    <div className={style.container}>
        <p className={style.text}>MARCAS COLABORADORAS</p>
     <div className={style.container_img}>
         <img src="/img/img1.png" alt="img-1" />
      <img src="/img/img2.png" alt="img-2" />
      <img src="/img/img3.png" alt="img-3" />
      <img src="/img/img4.png" alt="img-4" />
      <img src="/img/img5.png" alt="img-5" />
      <img src="/img/img6.png" alt="img-6" />
      <img src="/img/img7.png" alt="img-7" />
      <img src="/img/img8.png" alt="img-8" />
      <img src="/img/img9.png" alt="img-9" />
     </div>
    </div>
  );
}

export default Brands;
