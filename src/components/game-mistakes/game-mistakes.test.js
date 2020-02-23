import React from 'react';
import renderer from 'react-test-renderer';
import GameMistakes from "./game-mistakes";

const MOCK_NUMBER_OF_MISTAKE = 1;

it(`GameMistakes successfully rendered`, () => {
  const tree = renderer.create(<GameMistakes mistakes={MOCK_NUMBER_OF_MISTAKE}/>);
  expect(tree).toMatchSnapshot();
});
