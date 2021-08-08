import style from './PersonalArea.module.css'
import styleContainer from '../Container/container.module.css'
import CountryItem from '../CountryItem/CountryItem'

import { useRef } from 'react'


function PersonalArea() {
    
    const divSelectCountry = useRef(null)

    let countryList = [
        {
            id: 1,
            title: "Москва",
        },
        {
            id: 2,
            title: "Санкт-Петербург",
        },
        {
            id: 3,
            title: "Тверь",
        },
    ]

    return (
        <>
            <section className={style.sectionPersonalArea}>
                <div className={styleContainer.container + ' ' + style.containerPersonalData}>

                    <div className={style.personalData_avatar}>
                        <div className={style.personalData_imgBg}>
                            {/* <img className={style.personalData_imgContent} src="" alt="personal avatar" /> */}
                            <div className={style.personalDat_updateImg}>
                                <div className={style.fon}></div>
                                <div class={style.updateImg}>
                                    <input class={style.personalDat_FileInput} type="file" accept="image/jpeg,image/png,image/gif" />
                                </div>
                            </div>
                        </div>
                        <div className={style.personalData_name}>Ivan</div>
                    </div>
                    <form className={style.formPersonalData_generalInformation} action="">
                        <div className={style.personalDataItem + ' ' + style.blockPersonalData_country}>
                            <label className={style.formPersonalData_labelCountry + ' ' + style.labelFormPersonalData} htmlFor="country">
                                <span className={style.formPersonalDataText}>Country</span>
                            </label>
                            <div ref={divSelectCountry} className={style.blockPersonalDataText + ' ' + style.sity} id="country">Москва</div>
                            <div className={style.CountrySelect}>
                                {
                                    countryList.map((sity) => <CountryItem
                                        key={sity.id}
                                        id={sity.id}
                                        title={sity.title}
                                        divSelectCountry={divSelectCountry}
                                    />)
                                }
                            </div>
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_firsName}>
                            <label className={style.formPersonalData_labelFirsName + ' ' + style.labelFormPersonalData} htmlFor="firstName">
                                <span className={style.formPersonalDataText}>First Name</span>
                            </label>
                            <div className={style.blockPersonalDataText}>Ivan</div>
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_firsName}>
                            <label className={style.formPersonalData_labelEmail + ' ' + style.labelFormPersonalData} htmlFor="email">
                                <span className={style.formPersonalDataText}>Email</span>
                            </label>
                            <div className={style.blockPersonalDataText}>Ivan@mail.ru</div>
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_phone}>
                            <label className={style.formPersonalData_labelphone + ' ' + style.labelFormPersonalData} htmlFor="phone">
                                <span className={style.formPersonalDataText}>Phone</span>
                            </label>
                            <div className={style.blockPersonalDataText}>8 910 333 33 33</div>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default PersonalArea