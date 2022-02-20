import style from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div
                className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Work title={'Project name'}
                          description={'Short description'}
                          img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpSrZAVPLNvI27A1G3Jdu_sdxWiF0vM6JPA&usqp=CAU'}
                          link={'https://www.google.com/search?q=rfhnbyrf+cjw+ctnm&tbm=isch&ved=2ahUKEwivurih_ODyAhVGmYsKHSaNCYcQ2-cCegQIABAA&oq=rfhnbyrf+cjw+ctnm&gs_lcp=CgNpbWcQAzoFCAAQgAQ6BAgAEAo6BAgAEAFQ-VNY-ZABYNySAWgCcAB4AIABgQGIAfwJkgEEMC4xMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=zB4xYa-kB8ayrgSmmqa4CA&bih=657&biw=1366'}
                    />
                    <Work title={'Project name'}
                          description={'Short description'}
                          img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLw7bzZ941FkamKLIQGeyUkTTytZL-BGYPQ&usqp=CAU'}
                          link={'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&spell=1&sa=X&ved=2ahUKEwjAhrji9eDyAhXGhf0HHQFZBocQBSgAegQIARA0&biw=1366&bih=657'}
                    />
                </div>
            </div>
        </div>
    )
}

