import { GET_EVENTS, GET_EVENTS_BY_PARAMS } from "../types/eventTypes";

function eventReducer(state = [], action) {

  switch (action.type) {
    case GET_EVENTS:
      return action.payload;

      case GET_EVENTS_BY_PARAMS:
        return action.payload;

    default:
      return state;
  }
}

export default eventReducer;
