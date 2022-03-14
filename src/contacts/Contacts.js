import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import emailjs from '@emailjs/browser';
import React, {FormEvent, useState} from "react"

export const Contacts = () => {

    const [emailValue, setEmailValue] = useState('')
    const addEmailValue = (e: FormEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }

    const sendEmail = (e: any) => {
        setEmailValue('')
        e.preventDefault();

        emailjs.sendForm('service_lztcn3q', 'template_b4xmnzj', e.target,
            '6Z9LAoKT1rQirMWDw')
            .then((result) => {

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

        setTimeout(() => {
            alert('Message sent')
        }, 1000)
    }


    return (
        <section className={styles.contactsBlock} id={'contactsId'}>
            <div
                className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form method={'POST'} onSubmit={sendEmail} className={styles.formContainer}>
                    <ul>
                        <li><input placeholder={'Name'} type={'text'} name={'name'}/></li>
                        <li><input value={emailValue} onInput={addEmailValue} placeholder={'E-mail'} type={'text'}  name={'email'}/></li>
                        <li><textarea placeholder={'Your message'} name={'message'}/></li>
                        <li> <button type={'submit'} className={styles.submitBtn}   disabled={!emailValue}>Send</button></li>
                    </ul>
                </form>
            </div>
        </section>
    )
}
