import css from './App.module.css'
import React from 'react';
import Frase from './Components/Frase/Frase';
import Header from './Components/Header/Header';
import HomePage from './Components/Homepage/HomePage';
import SocialTop from './Components/SocialTop/SocialTop';
import Title from './Components/Title/Title';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectItem from './Components/Projects/ProjectItem';
import Contacts from './Components/Wrappers/Contacts/Contacts';
import About from './Components/Wrappers/about/About';
import Skill from './Components/Wrappers/Skills/Skill';
import Footer from './Components/Footer/Footer';
import  Image  from './Assets/image/image.jpg';
import Image2 from './Assets/image/image2.jpg'
import Image3 from './Assets/image/image3.jpg'

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1300,
      offset: 100


    })
    AOS.refresh()

  }, [])


  const project = {
    image: <img src={Image}/>,
    stacks: ['Typescript','React'],
    title:'Portifólio',
    describe: 'Este é um pequeno projeto pessoal'
  }
  const project2 = {
    image: <img src={Image2}/>,
    stacks: ['React'],
    title:'Projeto Dogs',
    describe: 'Este é um projeto pessoal que tentei fazer por fora, sem ver a aula do curso, está incompelto'
  }
  const project3 = {
    image: <img src={Image3}/>,
    stacks: ['HTML','CSS', 'JavaScript'],
    title:'The first Page',
    describe: 'Este é meu primeiro projeto front-end, é importante ter uma linha do tempo, para termos noção das nossas evoluções'
  }
  return (
    <div className={css.Wrapper}>
      <div className={css.Wrapper_Container}>
        <SocialTop />
        <Header />
        <div data-aos='fade-down' id='home' className={css.Content_Wrapper}>
          <HomePage />
        </div>
        <div className={css.Content}>
          <div className={css.Wrapper_Content}>
            <Frase data-aos='fade-down' />
            <div data-aos='fade-down' id='project' className={css.Content_Wrapper}>
              <Title lineWidth={80} expand>projects</Title>
              <div className={css.ProjectContentWrapper}>
                <ProjectItem  obj={project}  />
                <ProjectItem  obj={project2}  />
                <ProjectItem  obj={project3}  />

              </div>
            </div>
            <div data-aos='fade-down' id='skill' className={css.Content_Wrapper} >
              <Title lineWidth={35} expand={false}>skills</Title>
              <Skill/>
            </div>

            <div data-aos='fade-down' id='about' className={css.Content_Wrapper} >
              <Title expand={false} lineWidth={35}>sobre-mim</Title>
              <About/>
            </div>
            <div data-aos='fade-down' id='contact' className={css.Content_Wrapper} >
              <Title expand={false} lineWidth={20}>contacts</Title>
              <Contacts/>


            </div>  
           
            <Footer/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
