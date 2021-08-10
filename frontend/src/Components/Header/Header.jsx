import style from './Header.module.css';
import styleContainer from '../Container/container.module.css';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAC';


function Header() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.id);
    console.log(user);

    const logoutSession = () => {
        dispatch(logout(''))
    }

    return (
        <>
            <header className={style.header}>
                <div className={`${styleContainer.container} ${style.containerHeader}`}>
                    <nav className={style.navHeader}>
                        <ul className={style.headerMenu}>
                            <li className={style.headerMenuItem}>
                                <Link className={style.headerMenuLink} to="/">
                                    Главная
                                </Link>
                                {user ? (
                                    <>
                                        <Link className={style.headerMenuLink} to="/search">
                                            Поиск событий
                                        </Link>
                                        <Link className={style.headerMenuLink} to="/quicksearch">
                                            Быстрый поиск
                                        </Link>
                                    </>
                                ) : (
                                    console.log(123)
                                )}
                            </li>
                            <li>
                                {user ? (
                                    <>
                                        <Link className={style.headerMenuLink} to="/personalArea">
                                            Личный кабинет
                                        </Link>
                                        <Link onClick={() => logoutSession()} className={style.headerMenuLink} to="/logout">
                                            Выйти
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link className={style.headerMenuLink} to="/signUp">
                                            Регистрация
                                        </Link>
                                        <Link className={style.headerMenuLink} to="/signIn">
                                            Авторизация
                                        </Link>
                                    </>
                                )}
                            </li>
                            {/* {user && (
                  <Link className={style.headerMenuLink} to="/search">
                    Поиск событий
                  </Link>
                )}{' '}
                {user && (
                  <Link className={style.headerMenuLink} to="/quicksearch">
                    Быстрый поиск
                  </Link>
                )} */}
                            {/* </li>
              <li className={style.headerMenuItem}>
                {user && (
                  <Link className={style.headerMenuLink} to="/personalArea">
                    Личный кабинет
                  </Link>
                )}
                <Link className={style.headerMenuLink} to="/signUp">
                  Регистрация
                </Link>
                <Link className={style.headerMenuLink} to="/signIn">
                  Авторизация
                </Link>
                {user && (
                  <Link className={style.headerMenuLink} to="/logout">
                    Выйти
                  </Link>
                )}
              </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
