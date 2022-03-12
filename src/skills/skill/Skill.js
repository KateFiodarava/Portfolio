import style from './Skill.module.scss'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div> <img className={style.icon} src={props.img}/></div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>

        </div>
    )
}
