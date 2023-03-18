import React from 'react'
import skillBackground from '../../../Assets/image/skillBackground.png'
import SkillItem from '../../SkillItems/SkillItem'
import css from './Skill.module.css'
const Skill = () => {
  const items = ['TypeScript', 'JavaScript', 'C#']
  const dataBases = ['MySQL','SQLServer']
  const others = ['HTML','CSS','CleanCode','Scrum']
  const tools = ['Visual Studio Code', 'Visual Studio', 'Figma']
  const FrameWorks = ['React','ASP .NET']

  return (
    <div className={css.SkillContentWrapper}>
                <div className={css.Skillbackground}>
                  <img src={skillBackground} alt="" />
                </div>
                <div className={css.skillsItems}>
                  <div className={css.skillContainer}>
                    <SkillItem items={items}>Languages</SkillItem>
                  </div>
                  <div className={css.skillContainer}>
                    <SkillItem items={dataBases}>Databases</SkillItem>
                    <SkillItem items={others}>Other</SkillItem>
                  </div>
                  <div className={css.skillContainer}>
                    <SkillItem items={tools}>Tools</SkillItem>
                    <SkillItem items={FrameWorks}>Frameworks</SkillItem>
                  </div>
                </div>
              </div>
  )
}

export default Skill