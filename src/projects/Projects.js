import style from './Projects.module.css'
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
                             link={'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&spell=1&sa=X&ved=2ahUKEwjAhrji9eDyAhXGhf0HHQFZBocQBSgAegQIARA0&biw=1366&bih=657'}
                    />
                </div>
            </div>
        </div>
    )
}

