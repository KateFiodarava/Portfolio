import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div
                className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Kate Fedorova</h2>
                <div className={style.footer}>
                    <div className={style.link}>GitHub</div>
                    <div className={style.link}>Telegram </div>
                    <div className={style.link}> linkedin</div>
                    <div className={style.link}>CodeWars </div>


                </div>
                <div>2021@ all rights reserved</div>
            </div>
        </div>
    )
}

