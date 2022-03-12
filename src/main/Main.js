import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Photo from "../assets/image/Photo.jpg";
import ReactTypingEffect from "react-typing-effect";


function Main() {
    const photo={
        backgroundImage:`url(${Photo})`,
    }
    return (
        <section className={style.mainBlock} id={'mainId'}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <div className={style.mainTextBlock}>
                    <h1>I am <span className={style.span}>Kate Fedorova</span></h1>
                    </div>
                    <div>
                        <ReactTypingEffect
                            text={"Front-end developer (React)."}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={7000}
                            typingDelay={0}
                            className={style.mainPositionText}
                        />
                    </div>
                </div>
                <div className={style.photo} style={photo}>
                </div>
            </div>
        </section>
    );
}

export default Main
