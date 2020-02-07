import renderer from 'react-test-renderer';
import React from 'react';
import App from "./app";
import {mockData} from '../../../utils/test-data';

it(`App successfully rendered`, () => {
  const tree = renderer.create(<App {...mockData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
