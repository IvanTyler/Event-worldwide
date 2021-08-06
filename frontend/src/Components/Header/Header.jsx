import style from './Header.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={style.header}>
            <ul className={style.headerMenu}>
                <li className={style.headerMenuItem}>
                    <Link to="/">Главная</Link>
                </li>
                <li className={style.headerMenuItem}>
                    <Link to="/signUp">Регистрация</Link>
                </li>
                <li className={style.headerMenuItem}>
                    <Link to="/signIn">Авторизация</Link>
                </li>
                <li className={style.headerMenuItem}>
                    <Link to="/search">Поиск событий</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
