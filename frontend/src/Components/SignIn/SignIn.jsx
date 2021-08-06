import style from './SignIn.module.css'
import { useState } from 'react'
import { getFormUserDataAuth } from '../../redux/actions/userAC';
import { useDispatch } from 'react-redux';

function SignIn() {
    const dispatch = useDispatch()

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')


    const inputHandlerEmail = (event) => {
        setInputEmail(event.target.value)
    }
    const inputHandlerPassword = (event) => {
        setInputPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(getFormUserDataAuth(inputEmail, inputPassword))
    }

    return (
        <>
            <form onSubmit={submitHandler} className={style.HeaderformSignUp} action="">
                <input required onChange={inputHandlerEmail} maxLength="15" className={style.formAddInput} type="email" name="email" placeholder="Введите email" />
                <input required onChange={inputHandlerPassword} maxLength="15" className={style.formAddInput} type="password" name="password" placeholder="Password" />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}

export default SignIn