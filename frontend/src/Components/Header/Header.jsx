import style from './Header.module.css';
import styleContainer from '../Container/container.module.css';
import logo from './img/eww.png'
import telegram from './img/telegram.png'

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAC';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.id);
  console.log(user);

  const menuNav = useRef(null)

  const [menuNavBar, setmenuNavBar] = useState(false)

  const logoutSession = () => {
    dispatch(logout(''))
  }

  const location = useLocation();
  useEffect(() => {

  }, [location]);


  const showNavbar = () => {
    console.log(menuNav.current)
    if (menuNavBar === false) {
      menuNav.current.style.right = '0'
      setmenuNavBar(true)
    } else if (menuNavBar === true) {
      menuNav.current.style.right = '-320px'
      setmenuNavBar(false)
    }
  }

  return (
    <>
      <header className={
        window.location.href === 'http://localhost:3000/signUp' ||
          window.location.href === 'http://localhost:3000/signIn' ||
          window.location.href === 'http://localhost:3000/personalArea' ||
          window.location.href === 'http://localhost:3000/search' ||
          window.location.href === 'http://localhost:3000/quicksearch' ||
          window.location.href === 'http://localhost:3000/events' ?
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

                {/* {user ? (
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
                )} */}
              </li>
              <li className={style.headerMenuItem}>
                {user ? (
                  <>
                    <Link onClick={() => logoutSession()} className={style.headerMenuLink} to="/logout">
                      Выйти
                    </Link>
                    <div onClick={() => showNavbar()} class={style.headerSandwich}>
                      <div class={style.sandwichItem}></div>
                      <div class={style.sandwichItem}></div>
                      <div class={style.sandwichItem}></div>
                    </div>
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
        {user ? <div ref={menuNav} className={style.menuNav}>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/personalArea">
              Личный кабинет
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/search">
              Поиск событий
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/quicksearch">
              Быстрый поиск
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link className={style.headerMenuLink} to="/events">
              Мои события
            </Link>
          </div>
          <div className={style.menuNavItem}>
            <Link ClassName={style.headerMenuLink + ' ' + style.headerMenuLinkTelegram} to="/https://t.me/event_worldwideBot">
              <div className={style.telegramBlock}>
                <img className={style.telegramIcon} src={telegram} alt="telegram" />
              </div>
              <span className={style.telegramBot}>Телеграм бот</span>
            </Link>
          </div>
        </div> : console.log()}
      </header>
    </>
  );
}

export default Header;
