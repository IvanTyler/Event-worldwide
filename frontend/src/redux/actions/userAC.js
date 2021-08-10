import { ADD_USER, ADD_ID, DELETE_USER, DELETE_ID_USER } from '../types/userTypes';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};

export const addID = (id) => {
    return {
        type: ADD_ID,
        payload: id,
    };
};

export const deleteUser = (clearUser) => {
    return {
        type: DELETE_USER,
        payload: clearUser,
    };
};

export const deleteIdUser = (clearIdUser) => {
    return {
        type: DELETE_ID_USER,
        payload: clearIdUser,
    };
};

export const getFormUserData = (userName, email, password, city, phone) => async (dispatch) => {
    const response = await fetch('https://ikiro.ru/api/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            userName,
            email,
            password,
            city,
            phone
        })
    })
    const data = await response.json()
    console.log(data)
    console.log('user --->>>', data.Name)

    dispatch(addUser(data.Name))
    dispatch(addID(data.id))
}

export const getFormUserDataAuth = (email, password) => async (dispatch) => {
    console.log(email, password);
    const response = await fetch('https://ikiro.ru/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    console.log(data);
    dispatch(addUser(data.Name));
    dispatch(addID(data.id));
};

// export default { addUser, getFormUserData, getFormUserDataAuth }
export const saveUserDataPersonalArea = (personalDataUser) => async (dispatch) => {
    console.log('action --->', personalDataUser);
};

export const logout = (clearUser) => async (dispatch) => {
    const response = await fetch('https://ikiro.ru/api/logout', {
        credentials: 'include',
    })
    dispatch(deleteUser(clearUser));
    dispatch(deleteIdUser(clearUser));

    const status = await response.json();
    console.log('server status --->>>', status)
}

// export const userImg = (nameImg) => async (dispatch) => {
//     const response await fetch('')
// }

export default { addUser, getFormUserData, logout };
