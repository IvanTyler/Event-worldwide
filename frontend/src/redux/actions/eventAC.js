import { GET_EVENTS, GET_EVENTS_BY_PARAMS, GET_EVENTS_QUICK } from "../types/eventTypes";
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
  const apikey = 'MQLDj61OKln5rl4wZEruMOfnZJBhW2aF'
  const countryCode = formData.countryCode
  const date = formData.startDateTime._d.toISOString().substring(0, 10);
  const startDateTime = `${date}T00:00:00Z`
  const city = formData.city
  const classificationName = formData.classificationName
  const eventsByParams = await axios(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&countryCode=${countryCode}&startDateTime=${startDateTime}&city=${city}&classificationName=${classificationName}`);
  if (eventsByParams.data._embedded.events.length > 1) {
    dispatch(setAllByParams(eventsByParams.data._embedded.events))
    console.log(eventsByParams.data._embedded.events);
  }
}


export function setAllByKeyword(value) {
  return {
    type: GET_EVENTS_QUICK,
    payload: value
  }
}

export const getEventsByKeyword = (formData) => async (dispatch) => {
const client_id = 'MjI3OTA1NDN8MTYyODE1NzQzNi43MjE4NjAy'
  const keyword = formData.keyword
  // const datetime_utc = '2021-08-12T00:00:00'
  const eventsByKeyword = await axios(`https://api.seatgeek.com/2/events?q=${keyword}&client_id=${client_id}`);
  if (eventsByKeyword.data.events.length > 1) {
    dispatch(setAllByKeyword(eventsByKeyword.data.events))
    console.log(eventsByKeyword.data.events);
  }
}
