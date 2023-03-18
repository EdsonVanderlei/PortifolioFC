import React from 'react'
import css from './About.module.css'
import aboutimage from '../../../Assets/image/aboutme.png'

const About = () => {
  return (
    <div className={css.about_me_Wrapper}>

    <div data-aos='zoom-in' className={css.textWrapper}>
      <p>
        Olá, Sou o Edson 🤓 !
      </p>

      <p>
       
      Sou um desenvolvedor front-end autodidata. Posso desenvolver sites responsivos a partir do zero e transformá-los em experiências web modernas e fáceis de usar.
      </p>
      <p>
      Transformar minha criatividade e conhecimento em sites tem sido meu hobby e paixão nesse ultimos anos. Tenho trabalhado em projetos grandes na empresa onde estou, integrando apis de CORE Bancário, e refatorando todo um escritório virtual em react. Eu sempre me esforço para aprender sobre as mais novas tecnologias e frameworks.
      </p>
    </div>
    <img data-aos="zoom-in" className={css.aboutimage} src={aboutimage} alt="" />

  </div>
  )
}

export default About