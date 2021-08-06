import style from './Header.module.css'
import styleContainer from '../Container/container.module.css'

import { Link } from "react-router-dom";


function Header() {
    
    return (
        <>
            <header className={style.header}>
                <div className={`${styleContainer.container} ${style.containerHeader}` }>
                    <nav className={style.navHeader}>
                        <ul className={style.headerMenu}>
                            <li className={style.headerMenuItem}>
                                <Link className={style.headerMenuLink} to="/">Главная</Link>
                            </li>
                            <li className={style.headerMenuItem}>
                                <Link className={style.headerMenuLink} to="/signUp">Регистрация</Link>
                                <Link className={style.headerMenuLink} to="/signIn">Авторизация</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header