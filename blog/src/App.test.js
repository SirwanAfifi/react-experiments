import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import App from './App';
import { Header } from './components/Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders app component', () => {
  const wrapper = mount(<App />);
  const header = <Header />;
  expect(wrapper.contains(header)).toEqual(true);
});