import Enzyme, {mount} from 'enzyme';
import React from 'react';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {questions} from '../../../utils/test-data';
import AudioPlayer from './audio-player';
import {findByTestAtr} from '../../../utils/test-utils';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`AudioPlayer: Play button is correctly working`, () => {

  const app = mount(
      <AudioPlayer isPlaying={false} onPlayButtonClick={() => {}} src={questions[0].answers[0].src} />
  );
  const questionButton = findByTestAtr(app, `test-play-button`);

  questionButton.simulate(`click`);

  expect(questionButton.hasClass(`track__button--play`)).toBe(true);

});
