import React from 'react'
import { ReactComponent as Discord } from '../../Assets/image/Discord.svg'
import { ReactComponent as Github } from '../../Assets/image/Github.svg'
import css from './Footer.module.css'
const Footer = () => {
    return (
        <div className={css.Wrapper}>
            <div className={css.WrapperContent}>
                <div className={css.Content_Item}>
                    <div className={css.Email_Item}>
                        <p>
                            Edson
                        </p>
                        <p className={css.Email_Adress}>edsonvanderlei@outlook.com.br</p>
                    </div>
                    <p>Web designer and front-end developer</p>
                </div>
                <div className={css.Content_Item}>
                    <p className={css.MediaTitle}>
                        Media
                    </p>
                    <div className={css.MediaIcons}>
                        <Discord />
                        <Github />
                    </div>
                </div>


            </div>
            <p className={css.Copyright}>&copy; Copyright 2023. Made by Edson</p>


        </div>
    )
}

export default Footer