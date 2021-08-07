import style from './PersonalArea.module.css'
import styleContainer from '../Container/container.module.css'


function PersonalArea() {

    return (
        <>
            <section className={style.sectionPersonalArea}>
                <div className={styleContainer.container + ' ' + style.containerPersonalData}>

                    <div className={style.personalData_avatar}>
                        <div className={style.personalData_img}>
                        </div>
                        <div className={style.personalData_name}>Ivan</div>
                    </div>
                    <form className={style.formPersonalData_generalInformation} action="">
                        <div className={style.personalDataItem + ' ' + style.blockPersonalData_country}>
                            <label className={style.formPersonalData_labelCountry + ' ' + style.labelFormPersonalData} htmlFor="country">
                                <span className={style.formPersonalDataText}>Country</span>
                            </label>
                            <div className={style.blockPersonalDataText + ' ' + style.sity} id="country">Москва</div>
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