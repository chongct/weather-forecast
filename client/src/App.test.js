import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Location } from './components/Location';
import ShowDate from './components/ShowDate';
import Weather from './components/Weather';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

export let weatherData = {
  data: {
    apiQuery: {
      result: {
        time: 1550000000,
        icon: "clear-day"
      },
      forecast: [{
        time: 1551000000,
        icon: "clear-day"
      }]
    }
  }
};
let unknownWeatherData = {
  data: {
    apiQuery: {
      result: {
        time: 1550000000,
        icon: "unknown"
      },
      forecast: [{
        time: 1551000000,
        icon: "unknown"
      }]
    }
  }
};

describe("Test App component", () => {
  it("App component renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});

describe("Test Location component", () => {
  it("Location component renders without crashing", () => {
    const wrapper = shallow(<Location />);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find("Input").length).toEqual(1);
    expect(wrapper.find("Button").length).toEqual(1);
  });

  it("Simulate input change", () => {
    const props = {
      onInputChange: sinon.spy(),
      addLocation: jest.fn()
    };
    const wrapper = shallow(<Location {...props} />);
    expect(props.addLocation.mock.calls.length).toBe(0);
    wrapper.find("Input").simulate("change", {
      target: {
        value: "Singapore"
      }
    });
    expect(props.addLocation.mock.calls.length).toBe(1);
  });

  it("Simulate button click", () => {
    const props = {
      onButtonClick: sinon.spy(),
      getWeather: jest.fn()
    };
    const wrapper = shallow(<Location {...props} />);
    expect(props.getWeather).toHaveBeenCalledTimes(0);
    wrapper.find("Button").simulate("click");
    expect(props.getWeather).toHaveBeenCalledTimes(1);
  })
});

describe("Test ShowDate component", () => {
  it("ShowDate component renders without crashing", () => {
    const wrapper = shallow(<ShowDate />);
    expect(wrapper.exists()).toEqual(true);
    const today = new Date();
    expect(wrapper.find(".test-date").text()).toMatch(today.getDate().toString());
  });
});

describe("Test Weather component", () => {
  it("Weather component renders without crashing", () => {
    const wrapper = shallow(<Weather {...weatherData} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Weather component shows right weather icon", () => {
    const wrapper = mount(<Weather {...weatherData} />);
    expect(wrapper.find("svg.weather-icons").first().prop("data-icon")).toEqual("sun");
  });

  it("Weather component defaults to unknown weather icon", () => {
    const wrapper = mount(<Weather {...unknownWeatherData} />);
    expect(wrapper.find("svg.weather-icons").first().prop("data-icon")).toEqual("question");
  });
});
