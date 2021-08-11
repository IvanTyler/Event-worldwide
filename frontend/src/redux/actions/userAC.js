import { ADD_USER, ADD_ID, DELETE_USER, DELETE_ID_USER, ADD_USER_AVATAR } from '../types/userTypes';
import axios from 'axios';

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
}

export const addUserAvatar = (avatar) => {
    return {
        type: ADD_USER_AVATAR,
        payload: avatar,
    };
}



export const getFormUserData = (userName, email, password, city, phone) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/api/signup', {
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
    const response = await fetch('http://localhost:3001/api/signin', {
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

export const saveUserDataPersonalArea = (personalDataUser) => async (dispatch) => {
    console.log('action --->', personalDataUser);
};

export const logout = (clearUser) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/api/logout', {
        credentials: 'include',

    })
    dispatch(deleteUser(clearUser));
    dispatch(deleteIdUser(clearUser));
    const status = await response.json();
    console.log('server status --->>>', status)
    dispatch(deleteUser(clearUser));
}

export const userImg = (nameImg, files) => async (dispatch) => {
    console.log('name img -->', nameImg)
    const response = await fetch('https://ikiro.ru/api/uploadimg', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'multipart/form-data',
        // },
        // credentials: 'include',
        body: nameImg,
        files: files
    })

    const data = await response.json();
    console.log('server', data);
    dispatch(addUserAvatar(data.avatar))
}

// export const userImg = (formData) => async (dispatch) => {
//   console.log('======>>>>>>>', formData);
//   const response = await axios.post('https://ikiro.ru/api/uploadimg', formData, {
//   }).then(res => {
//     console.log(res)
//   })
// }

export default { addUser, getFormUserData, logout, userImg };
