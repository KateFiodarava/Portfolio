import style from './Connection.module.scss'
import styleContainer from '../common/styles/Container.module.css'


export const Connection = () => {
    return (
        <div className={style.connectionBlock}>
            <div
                className={`${styleContainer.container} ${style.worksContainer}`}>
                <div className={style.connection}>
                <h2 className={style.title}>
                    I am considering the option of remote work</h2>
               <a href={"https://www.linkedin.com/in/kate-fiodarava-5553a7216/"}> <button className={style.button} >HIRE ME</button> </a>
                </div>
            </div>
        </div>
    )
}

