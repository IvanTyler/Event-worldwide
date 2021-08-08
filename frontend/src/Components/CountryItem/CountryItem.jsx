import style from './CountryItem.module.css'
import { useRef } from 'react'


function CountryItem({ title, divSelectCountry }) {
    const divOptionCountry = useRef(null)

    const addCountry = () => {
        const countryOption = divOptionCountry.current.innerText
        const countrySelect = divSelectCountry.current.innerText = countryOption
    }

    return (
        <div ref={divOptionCountry} onClick={() => addCountry()} className={style.CountryOption}>{ title }</div>
    )
}

export default CountryItem