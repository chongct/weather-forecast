import { ADD_WEATHER } from "../constants/actionTypes";

export function addWeather(payload) {
  return { type: ADD_WEATHER, payload };
}
