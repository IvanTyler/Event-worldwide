import {
    ADD_USER,
    ADD_ID,
    DELETE_USER,
    DELETE_ID_USER,
    ADD_USER_AVATAR
} from '../types/userTypes'

import initState from '../initState'

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, user: action.payload }
        case ADD_ID:
            return { ...state, id: action.payload }
        case DELETE_USER:
            return { ...state, user: action.payload }
        case DELETE_ID_USER:
            return { ...state, id: action.payload }
        case ADD_USER_AVATAR:
            return { ...state, id: action.payload }
        default:
            return state
    }
}

export default userReducer