import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import {questions, userAnswer} from '../../../utils/test-data';
import GenreQuestionScreen from './genre-question-screen';
import {findByTestAtr} from '../../../utils/test-utils';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`GenreQuestionScreen: Form sending is correctly working`, () => {
  const question = questions[0];
  const clickHandler = jest.fn();
  const app = shallow(<GenreQuestionScreen question={question} onAnswer={clickHandler} renderPlayer={() => {}} activePlayerId = {0} onPlayButtonClick = {() => {}}/>);
  const questionForm = findByTestAtr(app, `test-answer-form-send`);
  const event = {
    preventDefault: () => {}
  };
  questionForm.simulate(`submit`, event);
  expect(clickHandler).toHaveBeenCalledWith(question, userAnswer);
});
