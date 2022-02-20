import style from './Nav.module.css'

function Nav() {
    return (
        <div className={style.nav}>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Portfolio</a>
            <a href=''>Contact</a>

        </div>
    );
}

export default Nav;