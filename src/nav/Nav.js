import style from './Nav.module.scss'
import {Link,animateScroll as scroll} from "react-scroll";
import React from "react";


function Nav() {
    return (
        <div className={style.nav}>
            <Link className={style.link} to={'mainId'} spy={true} smooth={true}>Home</Link>
            <Link className={style.link} to={'skillsId'} spy={true} smooth={true}>About</Link>
            <Link className={style.link} to={'projectsId'} spy={true} smooth={true}>Portfolio</Link>
            <Link className={style.link} to={'contactsId'} spy={true} smooth={true}>Contact</Link>
        </div>
    );
}

export default Nav;

