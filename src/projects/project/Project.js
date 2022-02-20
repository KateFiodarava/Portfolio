import style from './Work.module.css'


export const Work = (props) => {
    return (
        <div className={style.work}>
           <a href={props.link}> <img className={style.icon} src={props.img} />show</a>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>

        </div>
    )
}
