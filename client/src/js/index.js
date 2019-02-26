import store from "./store/index";
import { addWeather, addLocation } from "./actions/index";

window.store = store;
window.addWeather = addWeather;
window.addLocation = addLocation;
