import {
    ADD_USER,
    ADD_ID,
} from '../types/userTypes'

import initState from '../initState'

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, user: action.payload }
        case ADD_ID:
            return {...state, id: action.payload }
        default:
            return state
    }
}

export default userReducer