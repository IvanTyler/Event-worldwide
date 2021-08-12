import style from './Header.module.css';
import styleContainer from '../Container/container.module.css';
import logo from './img/eww.png';

import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAC';
import { useEffect, useState } from 'react';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const HomeButton = () => {
    history.push('/');
  };

  const user = useSelector((state) => state.user.user);
  // console.log(user)
  const logoutSession = () => {
    dispatch(logout(''));
    localStorage.clear();
    HomeButton();
  };
  useEffect(()=> {
    if(user.id) {
      // localStorage.setItem('id', user.id)
      // localStorage.setItem('Name', user.Name)
      // localStorage.setItem('email', user.email)
      // localStorage.setItem('City', user.City)
      // localStorage.setItem('phone', user.Userphonenumber)
      // localStorage.setItem('photo', user.Userphoto)
      // localStorage.setItem('password', user.password)
    }
  },[user]);

  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <>
      <header
        className={
          window.location.href === 'https://ikiro.ru/signUp' ||
          window.location.href === 'https://ikiro.ru/signIn' ||
          window.location.href === 'https://ikiro.ru/personalArea'
            ? style.headerRest
            : style.header
        }
      >
        <div className={`${styleContainer.container} ${style.containerHeader}`}>
          <nav className={style.navHeader}>
            <ul className={style.headerMenu}>
              <li className={style.headerMenuItem}>
                <Link className={style.headerMenuLink} to="/">
                  <div className={style.wrapperHeaderLogo}>
                    <img className={style.headerLogo} src={logo} alt="" />
                  </div>
                  <span className={style.logoText}>event world wide</span>
                </Link>

                {localStorage.Name ? (
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
                {localStorage.Name ? (
                  <>
                    <Link className={style.headerMenuLink} to="/personalArea">
                      Личный кабинет
                    </Link>
                    <Link onClick={() => logoutSession()} className={style.headerMenuLink}>
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
