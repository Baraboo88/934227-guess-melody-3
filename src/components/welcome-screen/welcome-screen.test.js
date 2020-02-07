import renderer from 'react-test-renderer';
import React from 'react';
import WelcomeScreen from "./welcome-screen";
import {mockData} from "../../../utils/test-data";

it(`WelcomeScreen successfully rendered`, () => {
  const tree = renderer.create(<WelcomeScreen {...mockData}/>);
  expect(tree).toMatchSnapshot();
});
