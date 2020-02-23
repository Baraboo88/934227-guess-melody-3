import renderer from 'react-test-renderer';
import React from 'react';
import AudioPlayer from './audio-player';
import {questions} from '../../utils/test-data';

it(`AudioPlayer successfully rendered`, () => {
  const tree = renderer
    .create(
        <AudioPlayer
          isPlaying={false}
          onPlayButtonClick={() => {}}
          src={questions[0].answers[0].src}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
