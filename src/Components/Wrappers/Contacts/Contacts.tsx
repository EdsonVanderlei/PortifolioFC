import React from 'react'
import css from './Contacts.module.css'
import {ReactComponent as Discord} from "../../../Assets/image/Discord.svg"
import {ReactComponent as Email} from "../../../Assets/image/Email.svg"

const Contacts = () => {
  return (
    <div className={css.Contacts_Wrapper}>
    <p className={css.Contacts_Text}>
Estou interessado em oportunidades de Desenvolvedor Web. Se você tiver algum dúvida, não hesite em entrar em contato !</p>
    <div data-aos='zoom-in' className={css.Contacts_Boxer}>
      <p className={css.Contacts_Boxer_Text}>Me mande mensagem aqui  👇</p>
      <p  className={css.InboxContacts}>
        <div   className={css.InboxContacts_Item}>
          <Discord />
          <p>Vandeco#2025</p>
        </div>
        <div  className={css.InboxContacts_Item}>
          <Email />
          <p className={css.Email_Inbox}>edsonvanderlei@outlook.com.br</p>
        </div>
      </p>


    </div>
  </div>
  )
}

export default Contacts