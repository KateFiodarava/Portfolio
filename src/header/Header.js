import Nav from "../nav/Nav";
import style from './Header.module.scss'


function Header() {
    return (
        <div className={style.header}>
            <Nav />
        </div>
);
}

export default Header
