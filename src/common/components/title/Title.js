import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div
                className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={'My first project'}
                             img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpSrZAVPLNvI27A1G3Jdu_sdxWiF0vM6JPA&usqp=CAU'}
                             link={'https://KateFiodarava.github.io/SocialNetwork'}
                    />
                    <Project title={'Todolist'}
                             description={'My second project'}
                             img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLw7bzZ941FkamKLIQGeyUkTTytZL-BGYPQ&usqp=CAU'}
                             link={'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&spell=1&sa=X&ved=2ahUKEwjAhrji9eDyAhXGhf0HHQFZBocQBSgAegQIARA0&biw=1366&bih=657'}
                    />
                </div>
            </div>
        </div>
    )
}

