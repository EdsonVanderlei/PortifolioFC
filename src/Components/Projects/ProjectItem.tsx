import React, { ReactComponentElement } from 'react'
import css from './ProjectItem.module.css'

const ProjectItem = ({obj} : {
    obj:{
        image:JSX.Element,
        stacks: string[],
        title: string,
        describe:string,
        delay:string
    } | null
}) => {
        React.useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((item,index) => {
                    if(item.isIntersecting){
                        setTimeout(() => {
                        item.target.classList.add('animate')
                            
                        }, 600 * (index + 1));
                    }
                    else{
                        item.target.classList.remove('animate')
                    }
                })
            })
            const items = document.querySelectorAll('.SkillItemAnimate')
            items.forEach((item) => {
                observer.observe(item)
            
            })
        },[])
       
   



    if(!obj) return null
    return (

            <div  className={css.Wrapper + " SkillItemAnimate"}>
                <div className={css.image}>
                    {obj.image}
                </div>
                <div className={css.stacks}>
                    {obj.stacks.map((item)=> <p key={item}>{item}</p>)}
                </div>

                <div className={css.informations}>
                    <h5>{obj.title}</h5>
                    <p>{obj.describe}</p>
                    <div className={css.buttons}>
                        <button className={css.button}><p>Live {'<~>'}</p> </button>
                    </div>
                </div>
            </div>

    )
}

export default ProjectItem