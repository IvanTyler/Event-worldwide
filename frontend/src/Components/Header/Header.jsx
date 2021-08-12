import style from './Header.module.css';
import styleContainer from '../Container/container.module.css';
import logo from './img/eww.png'

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAC';
import { useEffect, useState } from 'react';


function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.id);
  console.log(user);

  const logoutSession = () => {
    dispatch(logout(''))
  }

  const location = useLocation();
  useEffect(() => {

  }, [location]);

  return (
    <>
      <header className={
        window.location.href === 'http://localhost:3000/signUp' ||
          window.location.href === 'http://localhost:3000/signIn' ||
          window.location.href === 'http://localhost:3000/personalArea' ?
          style.headerRest : style.header
      }>
        <div className={`${styleContainer.container} ${style.containerHeader}`}>
          <nav className={style.navHeader}>
            <ul className={style.headerMenu}>
              <li className={style.headerMenuItem}>
                <Link className={style.headerMenuLink} to="/">
                  <div className={style.wrapperHeaderLogo}>
                    <img className={style.headerLogo} src={logo} alt="" />
                  </div>
                  <span className={style.logoText}>Event worldwide</span>
                </Link>

                {user ? (
                  <>
                    <Link className={style.headerMenuLink} to="/search">
                      Поиск событий
                    </Link>
                    <Link className={style.headerMenuLink} to="/quicksearch">
                      Быстрый поиск
                    </Link>
                    <Link className={style.headerMenuLink} to="/events">
                      Мои события
                    </Link>
                  </>
                ) : (
                  console.log(123)
                )}
              </li>
              <li className={style.headerMenuItem}>
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
                      SignUp
                    </Link>
                    <Link className={style.headerMenuLink} to="/signIn">
                      SignIn
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
