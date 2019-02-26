import { ADD_WEATHER, ADD_LOCATION } from "../constants/actionTypes";
import { combineReducers } from "redux";

const weatherInitialState = {
  weather: {}
};
const locationInitialState = {
  location: ""
};

const weatherReducer = (state = weatherInitialState, action) => {
  if (action.type === ADD_WEATHER) {
    return action.payload;
    // return Object.assign({}, state, {
    //   weather: action.payload
    // });
  }
  return state;
};
const locationReducer = (state = locationInitialState, action) => {
  switch(action.type) {
    case ADD_LOCATION:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer
});

export default rootReducer;
