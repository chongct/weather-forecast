import { ADD_WEATHER, ADD_LOCATION } from "../constants/actionTypes";

export function addWeather(payload) {
  return { type: ADD_WEATHER, payload };
}
export function addLocation(payload) {
  return { type: ADD_LOCATION, payload };
}
