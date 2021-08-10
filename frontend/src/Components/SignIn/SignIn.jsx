// import style from './SignIn.module.css'
import SignUp from '../SignUp/SignUp.module.css'
import styleContainer from '../Container/container.module.css'

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
            <div className={styleContainer.container}>
                <form className={SignUp.Headerform} onSubmit={submitHandler} action="">
                    <input required onChange={inputHandlerEmail} maxLength="15" className={SignUp.inputHeaderForm} type="email" name="email" placeholder="Введите email" />
                    <input required onChange={inputHandlerPassword} maxLength="15" className={SignUp.inputHeaderForm} type="password" name="password" placeholder="Password" />
                    <button className={SignUp.HeaderFormButton} type="submit">Войти</button>
                </form>
            </div>
        </>
    )
}

export default SignIn
