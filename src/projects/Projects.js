import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from "./../assets/image/Todolist.jpg"
import socialImage from "./../assets/image/SocialNetwork.jpg"


export const Projects = () => {
    const social={
        backgroundImage:`url(${socialImage})`,
    }
    const todolist={
        backgroundImage:`url(${todoImage})`,
    }
    return (
        <div className={style.projectsBlock}>
            <div
                className={`${styleContainer.container} ${style.projectsContainer}`}>
           <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project  style={social}
                              title={'Social Network'}
                             description={'My first project'}
                             link={'https://KateFiodarava.github.io/SocialNetwork'}
                    />
                    <Project
                        style={todolist}
                        title={'Todolist'}
                             description={'My second project'}
                             link={'https://KateFiodarava.github.io/Todolist'}
                    />
                </div>
            </div>
        </div>
    )
}

