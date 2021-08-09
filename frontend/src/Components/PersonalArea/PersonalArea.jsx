import style from './PersonalArea.module.css'
import styleContainer from '../Container/container.module.css'
import CountryItem from '../CountryItem/CountryItem'
import { useDispatch } from 'react-redux';
import { saveUserDataPersonalArea } from '../../redux/actions/userAC'
import ImageUploading from 'react-images-uploading';
import axios from 'axios'


import { useRef, useState } from 'react'

const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

function PersonalArea() {
    let countryList = [
        {
            id: 1,
            sity: "Москва",
        },
        {
            id: 2,
            sity: "Санкт-Петербург",
        },
        {
            id: 3,
            sity: "Тверь",
        },
        {
            id: 4,
            sity: "Саратов",
        },
        {
            id: 5,
            sity: "Омск",
        },
        {
            id: 6,
            sity: "Ивантеевка",
        },
        {
            id: 7,
            sity: "Балашиха",
        },
        {
            id: 8,
            sity: "Пермь",
        },
        {
            id: 9,
            sity: "Мытищи",
        },
    ]

    const dispatch = useDispatch()

    const [countrySelectCurrent, setCountrySelectCurrent] = useState(countryList[0].sity)
    const [countrySelectItems, setCountrySelectItems] = useState(false)
    const [buttonUpdate, setButtonUpdate] = useState(false)

    const [editName, setEditName] = useState('Ivan')
    const [editEmail, setEditEmail] = useState('Ivan@4566.ru')
    const [editPassword, setEditPassword] = useState('as324234234234')
    const [editPhone, setEditPhone] = useState('8 455 455 45 45')

    const [showHidePassword, setShowHidePassword] = useState(false)


    const divSelectCountry = useRef(null)


    const showBlockCountryes = () => {
        setCountrySelectItems(true)
        if (countrySelectItems === true) {
            setCountrySelectItems(false)
        } else {
            setCountrySelectItems(true)
        }
    }

    const editNameUser = useRef(null)
    const editEmailUser = useRef(null)
    const editPasswordUser = useRef(null)
    const editPhoneUser = useRef(null)

    const editUserData = () => {
        editNameUser.current.removeAttribute('readonly')
        editEmailUser.current.removeAttribute('readonly')
        editPasswordUser.current.removeAttribute('readonly')
        editPhoneUser.current.removeAttribute('readonly')

        editNameUser.current.classList.add(style.showEdit)
        editEmailUser.current.classList.add(style.showEdit)
        editPasswordUser.current.classList.add(style.showEdit)
        editPhoneUser.current.classList.add(style.showEdit)

        setButtonUpdate(true)
    }

    const saveUserData = () => {
        editNameUser.current.setAttribute("readonly", true)
        editEmailUser.current.setAttribute("readonly", true)
        editPasswordUser.current.setAttribute("readonly", true)
        editPhoneUser.current.setAttribute("readonly", true)

        editNameUser.current.classList.remove(style.showEdit)
        editEmailUser.current.classList.remove(style.showEdit)
        editPasswordUser.current.classList.remove(style.showEdit)
        editPhoneUser.current.classList.remove(style.showEdit)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.target))
        const formDataEdit = { ...formData, sity: countrySelectCurrent }
        dispatch(saveUserDataPersonalArea(formDataEdit))
        setButtonUpdate(false)
    }

    const showPasswordUser = useRef(null)

    const showPassword = () => {

        if (showHidePassword === false) {
            editPasswordUser.current.type = 'text';
            showPasswordUser.current.classList.add(style.showPassword)
            setShowHidePassword(true)
        } else if (showHidePassword === true) {
            editPasswordUser.current.type = 'password';
            showPasswordUser.current.classList.remove(style.showPassword)
            setShowHidePassword(false)
        }
    }

    const [imgUpload, setImgUpload] = useState()

    const fileSelectedHandler = (event) => {
        console.log(event.target.files[0])
        setImgUpload(event.target.files[0])
    }

    const fileUploadHandler = () => {
        axios.post()
    }

    return (
        <>
            <section className={style.sectionPersonalArea}>
                <div className={styleContainer.container + ' ' + style.containerPersonalData}>

                    <div className={style.personalData_avatar}>
                        <div className={style.personalData_imgBg}>
                            {imgUpload && <ImageThumb className={style.personalData_imgContent} image={imgUpload}  />}
                            <div className={style.personalDat_updateImg}>
                                <div className={style.fon}></div>
                                <div class={style.updateImg}>
                                    <input onChange={fileSelectedHandler} class={style.personalDat_FileInput} type="file" accept="image/jpeg,image/png,image/gif" />
                                </div>
                            </div>
                        </div>
                        <button>Загрузить img</button>
                        <div className={style.personalData_name}>Ivan</div>
                    </div>

                    <form onSubmit={submitHandler} className={style.formPersonalData_generalInformation} action="">
                        <div className={style.personalDataItem + ' ' + style.blockPersonalData_country}>
                            <label className={style.formPersonalData_labelCountry + ' ' + style.labelFormPersonalData} htmlFor="country">
                                <span className={style.formPersonalDataText}>Country</span>
                            </label>
                            <div className={style.wrapperSelectCountry}>
                                <div ref={divSelectCountry} onClick={() => showBlockCountryes()} className={style.blockPersonalDataText + ' ' + style.sity} id="country">Москва</div>
                                {countrySelectItems && <div className={style.CountrySelect}>
                                    {
                                        countryList.map((item) => <CountryItem
                                            key={item.id}
                                            id={item.id}
                                            sity={item.sity}
                                            divSelectCountry={divSelectCountry}
                                            setCountrySelectCurrent={setCountrySelectCurrent}
                                        />)
                                    }
                                </div>}
                            </div>
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_firsName}>
                            <label className={style.formPersonalData_labelFirsName + ' ' + style.labelFormPersonalData} htmlFor="firstName">
                                <span className={style.formPersonalDataText}>First Name</span>
                            </label>
                            <input ref={editNameUser} className={style.blockPersonalDataText} type="text" name="name" readOnly="readonly" onChange={(event) => setEditName(event.target.value)} value={editName} />
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_email}>
                            <label className={style.formPersonalData_labelEmail + ' ' + style.labelFormPersonalData} htmlFor="email">
                                <span className={style.formPersonalDataText}>Email</span>
                            </label>
                            <input ref={editEmailUser} className={style.blockPersonalDataText} type="email" name="email" readOnly="readonly" onChange={(event) => setEditEmail(event.target.value)} value={editEmail} />
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_password}>
                            <label className={style.formPersonalData_labelEmail + ' ' + style.labelFormPersonalData} htmlFor="email">
                                <span className={style.formPersonalDataText}>Password</span>
                            </label>
                            <div className={style.wrapperPassword}>
                                <span ref={showPasswordUser} onClick={() => showPassword()} className={style.hidePassword}></span>
                                <input ref={editPasswordUser} className={style.blockPersonalDataText} type="password" name="password" readOnly="readonly" onChange={(event) => setEditPassword(event.target.value)} value={editPassword} />
                            </div>
                        </div>
                        <div className={style.personalDataItem + ' ' + style.wrapperPersonalData_phone}>
                            <label className={style.formPersonalData_labelphone + ' ' + style.labelFormPersonalData} htmlFor="phone">
                                <span className={style.formPersonalDataText}>Phone</span>
                            </label>
                            <input ref={editPhoneUser} className={style.blockPersonalDataText} type="tel" name="phone" readOnly="readonly" onChange={(event) => setEditPhone(event.target.value)} value={editPhone} />
                        </div>
                        {buttonUpdate && <button onClick={() => saveUserData()} className={style.blockPersonalDataSubmit} type="submit">Обновить</button>}
                        <span onClick={() => editUserData()} className={style.blockPersonalDataSubmit + ' ' + style.blockPersonalDataEdit}>Редактировать</span>
                    </form>

                </div>
            </section>
        </>
    )
}

export default PersonalArea