import store from "./store/index";
import { addWeather } from "./actions/index";

window.store = store;
window.addWeather = addWeather;
