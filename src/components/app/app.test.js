import renderer from 'react-test-renderer';
import React from 'react';
import {App} from "./app";
import {questions} from '../../utils/test-data';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  mistakesNumber: 0,
  maxMistakesNumber: 3,
  step: -1,
  questions
};


const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

it(`App successfully rendered`, () => {
  const tree = renderer.create(<Provider store={store}><App mistakesNumber={4} maxMistakesNumber={3} step={-1} questions={questions} onWelcomeButtonClick = {() => {}} onUserAnswer = {() => {}}/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
