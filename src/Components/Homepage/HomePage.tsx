import React from 'react'
import css from './HomePage.module.css'
import homepage from '../../Assets/image/homepage.png'
const HomePage = () => {
  return (
    <div className={css.Wrapper}>
        <div className={css.Informations}>
            <div className={css.title}>
              Olá, me chamo <span>Edson</span> e me amarro em ser <span>front-end Developer</span>
            </div>
            <p className={css.describe}>
                Construo novas faces para negócios
            </p>
            <button className={css.contact}>
                <p>Entre em contato !!</p>
            </button>
        </div>
        <div className={css.photo}>
             <img src={homepage} alt="" />
             <div className={css.photo_describe_Wrapper}>
             <div className={css.photo_describe}>
                <div className={css.square}>
                </div>  
                <p className={css.photo_describe_text}>Estudando e atualizando <span>Portifólio</span></p>
             </div>
             </div>
            
        </div>


    </div>
  )
}

export default HomePage