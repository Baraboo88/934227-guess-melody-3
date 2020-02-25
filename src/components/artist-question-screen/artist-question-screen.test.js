import renderer from 'react-test-renderer';
import React from 'react';
import {ArtistQuestionScreen} from "./artist-question-screen";
import {questions} from "../../utils/test-data";


it(`ArtistQuestionScreen successfully rendered`, () => {
  const tree = renderer.create(<ArtistQuestionScreen question={questions[1]} onAnswer={() => {}} activePlayerId = {0} onPlayButtonClick = {() => {}} mistakes={2}/>);
  expect(tree).toMatchSnapshot();
});
