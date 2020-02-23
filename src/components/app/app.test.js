import renderer from 'react-test-renderer';
import React from 'react';
import {App} from "./app";
import {questions} from '../../utils/test-data';

it(`App successfully rendered`, () => {
  const tree = renderer.create(<App mistakesNumber={4} maxMistakesNumber={3} step={-1} questions={questions} onWelcomeButtonClick = {() => {}} onUserAnswer = {() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
