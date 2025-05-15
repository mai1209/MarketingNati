import style from "../Styles/Advice.module.css";

function Advice() {
  return (
    <div className={style.background}>
      <p className={style.text}>
        Acompaño a empresas, emprendedores y freelancers a construir estrategias
        de marketing y comunicación alineadas con su propósito.Estoy acá para
        ayudarte a ordenar, priorizar y comunicar con claridad, a través de
        procesos estratégicos que respeten la esencia de tu marca.
      </p>
   <div className={style.container_text}>
       <p className={style.p}>
        <span>Asesoría</span> en marketing y comunicación estratégica
      </p>
      <p className={style.p}>
        <span>Gestión</span> de proyectos como Project Manager.
      </p>
      <p className={style.p}>
        <span>Creación</span>  y edición de contenido auténtico.
      </p>
      <p className={style.p}>
        <span>Organización</span>  y orden interno para emprendedores.
      </p>
      <p className={style.p}>
        <span>Colaboraciones</span> con equipos o marcas.
      </p>
      <p className={style.p}>
        <span>Acompañamiento</span>  presencial u online.
      </p>
      <p className={style.p}>
        Todo adaptado a vos, con una mirada cercana y personalizada
      </p>
   </div>
   <p className={`${style.text} ${style.otraClase}`}> Todo adaptado a vos, con una mirada cercana y personalizada.</p>
    </div>
  );
}

export default Advice;
