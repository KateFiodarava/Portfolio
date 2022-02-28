import style from './Nav.module.scss'

function Nav() {
    return (
        <div className={style.nav}>
           <nav> <a className={style.link}  href='Nav.js'>Home</a></nav>
            <nav> <a className={style.link} href='/my-app/src/skills/Skills.js'>About</a></nav>
                <nav><a className={style.link} href='/my-app/src/projects/Projects.js'>Portfolio</a></nav>
                    <nav> <a className={style.link} href='/my-app/src/contacts/Contacts.js'>Contact</a></nav>

        </div>
    );
}

export default Nav;