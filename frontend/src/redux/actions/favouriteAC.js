import { GET_EVENTS_FAV, DELETE_FAV } from "../types/favouriteTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_EVENTS_FAV,
    payload: value
  }
}

export const getFavouriteEvents = () => async (dispatch) => {
  const favouriteEvents = await axios('https://ikiro.ru/api/subscribes');
  dispatch(setAll(favouriteEvents.data))
}


export function deleteFavourite(id) {
  return {
    type: DELETE_FAV,
    payload: id
  }
}


export const removeFavourite = (id) => async (dispatch) => {
  await axios.delete('https://ikiro.ru/api/subscribes', { data: { id } });
  dispatch(deleteFavourite(id))
}

