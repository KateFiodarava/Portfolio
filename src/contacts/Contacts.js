import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'



export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div
                className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <form className={style.form}>
                       <p><input/></p>
                        <p><input/></p>
                        <p><textarea/></p>
                        <button type="submit" className={style.button}>send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

