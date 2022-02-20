import style from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
           <a href={props.link}> <img className={style.icon} src={props.img} />show </a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>

        </div>
    )
}
