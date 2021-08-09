import { GET_SUBCRIBE, ADD_SUBSCRIBE, DELETE_SUBSCRIBE, CHANGE_STATUS } from "../types/subscribesTypes";

import axios from "axios";

export function setAll(value) {
  return {
    type: GET_SUBCRIBE,
    payload: value
  }
}

export function createSubscribe(value) {
  return {
    type: ADD_SUBSCRIBE,
    payload: value
  }
}

export function deleteSubscribe(id) {
  return {
    type: DELETE_SUBSCRIBE,
    payload: id
  }
}

export function change(id) {
  return {
    type: CHANGE_STATUS,
    payload: id,
  }
}

export const getAllSubscribes = () => async (dispatch) => {
  const subscribes = await axios('http://localhost:3001/api/subscribes');
  dispatch(setAll(subscribes.data))
}

export const addOneSubscribe = (data) => async (dispatch) => {
  console.log(data.data);
  const oneSubscribe = await axios.post('http://localhost:3001/api/subscribes', { data })
  dispatch(createSubscribe(oneSubscribe.data))
}

export const removeSubscribe = (id) => async (dispatch) => {
  await axios.delete('http://localhost:3001/api/subscribes', { data: { id } });
  dispatch(deleteSubscribe(id))
}

export const changeStatus = (id) => async (dispatch) => {
  await axios.patch('http://localhost:3001/api/subscribes', { id })
  dispatch(change(id))
}
