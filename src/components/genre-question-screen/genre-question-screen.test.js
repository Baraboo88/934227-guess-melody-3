import React from 'react';
import renderer from 'react-test-renderer';
import {GenreQuestionScreen} from './genre-question-screen';
import {questions} from '../../utils/test-data';


it(`ArtistQuestionScreen successfully rendered`, () => {
  const tree = renderer.create(<GenreQuestionScreen question={questions[0]} onAnswer={() => {}} activePlayerId = {0} onPlayButtonClick = {() => {}} mistakes={3}/>);
  expect(tree).toMatchSnapshot();
});
