import style from './SignUp.module.css'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getFormUserData } from '../../redux/actions/userAC';

function SignUp() {
    const dispatch = useDispatch()

    const selectCity = useRef(null)

    const [inputUser, setInputUser] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputPhone, setInputPhone] = useState('')



    const inputHandlerName = (event) => {
        setInputUser(event.target.value)
    }
    const inputHandlerEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const inputHandlerPassword = (event) => {
        setInputPassword(event.target.value)
    }
    const inputHandlerPhone = (event) => {
      setInputPhone(event.target.value)
    }

    const addUserName = (name) => {
        dispatch(addUser(name))
    }


    const submitHandler = (event) => {
        event.preventDefault()
        const city = selectCity.current.value
        addUserName(inputUser)
        dispatch(getFormUserData(inputUser, inputPassword, inputEmail, city, inputPhone))
        setInputUser('')
        setInputEmail('')
        setInputPassword('')
    }

    return (
        <>
            <form onSubmit={submitHandler} className={style.HeaderformSignUp} action="">
                <input required onChange={inputHandlerName} required className={style.formAddInput} type="text" name="name" placeholder="Введите имя" />
                <input required onChange={inputHandlerEmail} required className={style.formAddInput} type="email" name="email" placeholder="Введите email" />
                <input required onChange={inputHandlerPassword} className={style.formAddInput} minLength="8" maxLength="15" type="password" name="password" placeholder="Введите password" />
                <input required onChange={inputHandlerPhone} type="tel" name="phone" placeholder="+7(___)___-__-__" maxLength="11" />
                <select className="selectForm" ref={selectCity} name="select">
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Тверь</option>
                </select>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}

export default SignUp
