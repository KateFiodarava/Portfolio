import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Photo from "../assets/image/Photo.jpg";

function Main() {
    const photo={
        backgroundImage:`url(${Photo})`,
    }
    return (
        <section className={style.mainBlock} id={'mainId'}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am <span className={style.span}>Kate Fedorova</span></h1>
                    <p> Frontend Developer</p>
                </div>
                <div className={style.photo} style={photo}>
                </div>
            </div>
        </section>
    );
}

export default Main
