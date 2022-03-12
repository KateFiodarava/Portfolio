import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <section className={styles.contactsBlock} id={'contactsId'}>
            <div
                className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.formContainer}>
                    <ul>
                        <li><input placeholder={'Name'} type={'text'}/></li>
                        <li><input  placeholder={'E-mail'} type={'text'}/></li>
                        <li><textarea placeholder={'Your message'} /></li>
                        <li> <button type={'submit'} className={styles.submitBtn}>Send</button></li>
                    </ul>
                </form>
            </div>
        </section>
    )
}

