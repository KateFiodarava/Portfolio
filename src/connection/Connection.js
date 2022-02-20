import style from './Connection.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Connection = () => {
    return (
        <div className={style.connectionBlock}>
            <div
                className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>
                    I am considering the option of remote work</h2>
                <button className={style.button}>hire me</button>
            </div>
        </div>
    )
}

