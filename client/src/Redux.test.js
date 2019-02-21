import * as actions from "./js/actions/index";
import * as types from "./js/constants/actionTypes";
import reducer from "./js/reducers/index";
import { weatherData } from "./App.test.js";

describe("Redux actions test", () => {
  let payload = weatherData;
  it("should create an action to add a weather result", () => {
    const expectedAction = {
      type: types.ADD_WEATHER,
      payload
    };
    expect(actions.addWeather(weatherData)).toEqual(expectedAction);
  });
});

describe("Redux reducers test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      weather: {}
    });
  });

  it("should handle ADD_WEATHER", () => {
    expect(reducer(undefined, {
      type: types.ADD_WEATHER,
      payload: weatherData
    })).toEqual({
      weather: weatherData
    });
  });
});
