import React from 'react'
import css from './Frase.module.css'
import Aspas from '../../Assets/image/Aspas.png'

const Frase = () => {
    return (
        <div data-aos="fade-up" className={css.Wrapper}>
            <div className={css.Content}>
                <div className={css.Content_Phrase}>
                    <img className={css.image1} src={Aspas} alt="" />
                    <img className={css.image2}  src={Aspas} alt="" />
                    <p>Com grande poder vem grande conta de eletricidade ⚡️</p>
                </div>
                <div className={css.Autor}>
                  <p>- Dr. Who</p> 
                </div>
            </div>
        </div>
    )
}

export default Frase