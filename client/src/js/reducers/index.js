import { ADD_WEATHER } from "../constants/actionTypes";

const initialState = {
  weather: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_WEATHER) {
    return Object.assign({}, state, {
      weather: action.payload
    });
  }
  return state;
};

export default rootReducer;
