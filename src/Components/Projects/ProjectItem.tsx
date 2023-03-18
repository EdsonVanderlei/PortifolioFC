import React, { ReactComponentElement } from 'react'
import css from './ProjectItem.module.css'

const ProjectItem = ({obj} : {
    obj:{
        image:JSX.Element,
        stacks: string[],
        title: string,
        describe:string
    } | null
}) => {

    if(!obj) return null
    return (

            <div data-aos="zoom-in" className={css.Wrapper}>
                <div className={css.image}>
                    {obj.image}
                </div>
                <div className={css.stacks}>
                    {obj.stacks.map((item)=> <p>{item}</p>)}
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