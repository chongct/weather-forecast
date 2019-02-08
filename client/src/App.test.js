import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Location from './components/Location';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it("App component renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toEqual(true);
});

it("Location component renders without crashing", () => {
  const wrapper = shallow(<Location />);
  console.log(wrapper);
  expect(wrapper.exists()).toEqual(true);
  expect(wrapper.find("Input").length).toEqual(1);
  expect(wrapper.find("Button").length).toEqual(1);
});
