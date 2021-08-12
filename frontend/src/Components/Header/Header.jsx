import style from './Header.module.css';
import styleContainer from '../Container/container.module.css';
<<<<<<< HEAD
import logo from './img/eww.png';
=======
import logo from './img/eww.png'
import telegram from './img/telegram.png'
>>>>>>> test

import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAC';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useEffect, useRef, useState } from 'react';
>>>>>>> test

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const HomeButton = () => {
    history.push('/');
  };

<<<<<<< HEAD
  const user = useSelector((state) => state.user.user);
  // console.log(user)
=======
  const menuNav = useRef(null)

  const sandwitch_1 = useRef(null)
  const sandwitch_2 = useRef(null)
  const sandwitch_3 = useRef(null)


  const [menuNavBar, setmenuNavBar] = useState(false)

>>>>>>> test
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


  const showNavbar = () => {
    console.log(menuNav.current)
    if (menuNavBar === false) {
      menuNav.current.style.right = '0'
      sandwitch_1.current.style.transform = "rotate(45deg)"
      sandwitch_1.current.style.position = "relative"
      sandwitch_1.current.style.top = "7px"
      sandwitch_2.current.style.display = "none"
      sandwitch_3.current.style.transform = "rotate(-45deg)"
      setmenuNavBar(true)
    } else if (menuNavBar === true) {
      menuNav.current.style.right = '-320px'
      sandwitch_1.current.style.transform = "rotate(0deg)"
      sandwitch_1.current.style.position = "static"
      sandwitch_1.current.style.top = "0"
      sandwitch_2.current.style.display = "block"
      sandwitch_3.current.style.transform = "rotate(0deg)"
      setmenuNavBar(false)
    }
  }

  return (
    <>
<<<<<<< HEAD
      <header
        className={
          window.location.href === 'https://ikiro.ru/signUp' ||
          window.location.href === 'https://ikiro.ru/signIn' ||
          window.location.href === 'https://ikiro.ru/personalArea'
            ? style.headerRest
            : style.header
        }
      >
=======
      <header className={
        window.location.href === 'http://localhost:3000/signUp' ||
          window.location.href === 'http://localhost:3000/signIn' ||
          window.location.href === 'http://localhost:3000/personalArea' ||
          window.location.href === 'http://localhost:3000/search' ||
          window.location.href === 'http://localhost:3000/quicksearch' ||
          window.location.href === 'http://localhost:3000/events' ?
          style.headerRest : style.header
      }>
>>>>>>> test
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

<<<<<<< HEAD
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
=======
>>>>>>> test
              </li>
              <li className={style.headerMenuItem}>
                {localStorage.Name ? (
                  <>
<<<<<<< HEAD
                    <Link className={style.headerMenuLink} to="/personalArea">
                      Личный кабинет
                    </Link>
                    <Link onClick={() => logoutSession()} className={style.headerMenuLink}>
=======
                    <Link onClick={() => logoutSession()} className={style.headerMenuLink} to="/logout">
>>>>>>> test
                      Выйти
                    </Link>
                    <div onClick={() => showNavbar()} class={style.headerSandwich}>
                      <div ref={sandwitch_1} class={style.sandwichItem + ' ' + style.sandwith_1}></div>
                      <div ref={sandwitch_2} class={style.sandwichItem + ' ' + style.sandwith_2}></div>
                      <div ref={sandwitch_3} class={style.sandwichItem + ' ' + style.sandwith_3}></div>
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
            <a target="_blank" ClassName={style.headerMenuLink + ' ' + style.headerMenuLinkTelegram} href="https://t.me/event_worldwideBot">
              <span className={style.telegramBot}>Бот</span>
              <div className={style.telegramBlock}>
                <img className={style.telegramIcon} src={telegram} alt="telegram" />
              </div>
            </a>
          </div>
        </div> : console.log()}
      </header>
    </>
  );
}

export default Header;
