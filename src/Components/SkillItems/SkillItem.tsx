import React from 'react'
import css from './SkillItem.module.css'

const SkillItem = ({items,children} : {
  items: string[],
  children: React.ReactNode
}) => {
  return (
    <div className={css.Wrapper}>
        <h5>{children}</h5>
        <div className={css.items}>
         {items?.map((item) => {
            return (
            <p key={item}>{item} </p> 

            )
         }

         ).join(' | ')}
        </div>
    </div>
  )
}

export default SkillItem