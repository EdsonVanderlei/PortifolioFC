import React from 'react'
import css from './SocialTop.module.css'
import {ReactComponent as  Discord}  from '../../Assets/image/Discord.svg'
import {ReactComponent as  GitHub} from '../../Assets/image/Github.svg'

const SocialTop = () => {
  return (
     <div className={css.Wrapper}>
            <div className={css.Line}>

            </div>
            <div className={css.social_icons}>
                <Discord/>
                <GitHub/>
            </div>
     </div>
  )
}

export default SocialTop