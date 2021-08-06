import { GET_EVENTS, GET_EVENTS_BY_PARAMS } from "../types/eventTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_EVENTS,
    payload: value
  }
}

export const getRandomEventPoster = () => async (dispatch) => {
  const randomPoster = await axios('https://app.ticketmaster.com/discovery/v2/events.json?apikey=MQLDj61OKln5rl4wZEruMOfnZJBhW2aF&startDateTime=2021-08-13T00:00:00Z');
  dispatch(setAll(randomPoster.data._embedded.events))
}


export function setAllByParams(value) {
  return {
    type: GET_EVENTS_BY_PARAMS,
    payload: value
  }
}

export const getEventsByParams = (formData) => async (dispatch) => {
  console.log(formData);
  const apikey = 'MQLDj61OKln5rl4wZEruMOfnZJBhW2aF'
  const countryCode = formData.countryCode
  const date = formData.startDateTime._d.toISOString().substring(0, 10);
  const startDateTime = `${date}T00:00:00Z`
  console.log(startDateTime);
  const city = formData.city
  const classificationName = formData.classificationName
  const eventsByParams = await axios(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&countryCode=${countryCode}&startDateTime=${startDateTime}Z&city=${city}&classificationName=${classificationName}`);
  console.log(eventsByParams);
}
