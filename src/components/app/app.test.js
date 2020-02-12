import renderer from 'react-test-renderer';
import React from 'react';
import App from "./app";
import {questions} from '../../../utils/test-data';

it(`App successfully rendered`, () => {
  const tree = renderer.create(<App numberOfErrors={4} questions={questions}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
