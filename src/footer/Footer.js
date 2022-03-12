import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div
                className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Kate Fedorova</h2>
                <div className={style.footer}>
                    <a href={"https://github.com/KateFiodarava"}> <div className={style.link}>GitHub</div></a>
                    <a href={"https://t.me/KateFiodarava"}>  <div className={style.link}>Telegram </div></a>
                    <a href={"https://www.linkedin.com/in/kate-fiodarava-5553a7216/"}><div className={style.link}> Linkedin</div></a>
                    <a href={"https://www.codewars.com/users/KateFiodarava"}><div className={style.link}>CodeWars </div></a>


                </div>
                <div className={style.copyright}>2021@ All Rights Reserved</div>
            </div>
        </div>
    )
}

