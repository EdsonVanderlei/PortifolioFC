import React, { memo } from 'react'
import css from './Header.module.css'
import Logo from '../../Assets/image/Logo.png'


const Header = () => {

    const [active, setActive] = React.useState(false)
    const Menu = React.useRef<HTMLDivElement | null>(null)
    const Burguer = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        function handleClick(e:MouseEvent) {
            if(active && Menu.current && Burguer.current && e.target){
            if(!Menu.current.contains(e.target as Node) && !Burguer.current.contains(e.target as Node)){
                setActive(false)

            }

        }}

        window.addEventListener('click', handleClick, true)
    },[active])



    return (
        <div className={css.Container}>

            <div className={css.Wrapper} >
                <div className={css.logo}>
                    <p className={css.logo_name}>Edson</p>
                    <img src={Logo} alt="" />
                </div>

                <div ref={Burguer} className={`${css.burguer} ${active ? css.burguerActive : null}`} onClick={() => setActive(!active)}> </div>
                <div ref={Menu} className={`${css.menu} ${active ? css.menuMobile : null}`}>
                    <a href='#home' onClick={() => setActive(false)} className={css.menu_item}><span>#</span>home</a>
                    <a href="#project" onClick={() => setActive(false)} className={css.menu_item}><span>#</span>projetos</a>
                    <a href='#about' onClick={() => setActive(false)} className={css.menu_item}><span>#</span>sobre mim</a>
                    <a href='#contact' onClick={() => setActive(false)} className={css.menu_item}><span>#</span>contatos</a>
                </div>

            </div>
        </div>

    )
}

export default Header