import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {questions} from '../../utils/test-data';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import {findByTestAtr} from '../../utils/test-utils';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`ArtistQuestionScreen: Answer buttons is correctly working`, () => {
  const clickHandler = jest.fn();
  const question = questions[1];
  const app = shallow(
      <ArtistQuestionScreen question={question} onAnswer={clickHandler} renderPlayer = {() => {}} activePlayerId = {0} onPlayButtonClick = {() => {}} mistakes={3}/>
  );
  const questionButtons = findByTestAtr(app, `test-answer-button`);

  const answers = question.answers;
  questionButtons.forEach((questionButton, i) => {
    questionButton.simulate(`change`);
    expect(clickHandler).toHaveBeenCalledWith(question, answers[i]);
  });
});
