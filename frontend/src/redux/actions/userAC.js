import { ADD_USER, ADD_ID } from '../types/userTypes';

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

export const getFormUserData = (userName, email, password, city, phone) => async (dispatch) => {
  try {
    const response = await fetch('https://ikiro.ru/api/signup/', {
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
        phone,
      }),
    });
    const data = await response.json();
    console.log(data);
    dispatch(addUser(data.user));
    dispatch(addID(data.id));
  } catch (error) {
    console.log(error);
  }
};

export const getFormUserDataAuth = (email, password) => async (dispatch) => {
  const response = await fetch('https://ikiro.ru/api/signin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
          email,
          password,
      })
  })
  const data = await response.json()
  console.log(data)
  dispatch(addUser(data.user))
  dispatch(addID(data.id))
}



// export default { addUser, getFormUserData, getFormUserDataAuth }
