import React from 'react'
import css from './Title.module.css'


const Title = ({ children, expand, lineWidth }: {
    children: React.ReactNode,
    expand: boolean,
    lineWidth: number
}) => {




    return (
        <div className={css.Wrapper}>
            <div style={{ width: `${lineWidth}%` }} className={css.Principal}>
                <p><span>#</span>{children}</p>
                <div className={css.line}>
                </div>


            </div>
            {expand && <p className={css.Expand}>Veja tudo {'~~>'}</p>}

        </div>
    )
}

export default Title