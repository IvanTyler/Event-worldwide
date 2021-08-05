import style from './SignIn.module.css'

function SignIn() {
    
    return (
        <>
            <form action="">
                <input required className={style.formAddInput} type="email" name="email" placeholder="Введите email" />
                <input required className={style.formAddInput} type="password" name="password" placeholder="Password" />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    )
}

export default SignIn