import { ADD_USER, ADD_ID } from '../types/userTypes'
import axios from 'axios'


export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}

// export const addID = (email) => {
//     return {
//         type: ADD_ID,
//         payload: email,
//     }
// } Будем использовать в будущем

export const getFormUserData = (userName, email, password, city, phone) => async () => {
    const userData = await axios.post('http://87.249.49.53:3001/', { userName, email, password, city, phone })
    // userData.data ---------> ответ с бека
  console.log(userData)
  }

export default { addUser, getFormUserData }
