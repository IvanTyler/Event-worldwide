import { GET_EVENTS } from "../types/eventTypes";

function eventReducer(state = [], action) {

  switch (action.type) {
    case GET_EVENTS:
      return action.payload;

    default:
      return state;
  }
}

export default eventReducer;
