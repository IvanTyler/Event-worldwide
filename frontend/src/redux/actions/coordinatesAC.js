import { GET_COORDINATES } from "../types/coordinatesTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_COORDINATES,
    payload: value
  }
}

export const getFavouriteEventsCoordinates = () => async (dispatch) => {
  const favouriteEventsCoordinates = await axios('https://ikiro.ru/api/subscribes');
  console.log(favouriteEventsCoordinates.data);
  dispatch(setAll(favouriteEventsCoordinates.data))
}
