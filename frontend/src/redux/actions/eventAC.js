import { GET_EVENTS } from "../types/eventTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_EVENTS,
    payload: value
  }
}

export const getRandomEventPoster = () => async (dispatch) => {
  const randomPoster = await axios('https://app.ticketmaster.com/discovery/v2/events.json?apikey=MQLDj61OKln5rl4wZEruMOfnZJBhW2aF&startDateTime=2021-08-13T00:00:00Z');
  console.log(randomPoster.data._embedded.events);
  dispatch(setAll(randomPoster.data._embedded.events))
}
