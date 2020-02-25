import React from "react";
import Enzyme, {shallow} from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import {welcomeScreenMockData} from "../../utils/test-data";
import {WelcomeScreen} from "./welcome-screen";
import {findByTestAtr} from "../../utils/test-utils";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Start button is correctly working`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <WelcomeScreen {...welcomeScreenMockData} onStartButtonClick={clickHandler} />
  );
  const startButton = findByTestAtr(app, `test-start-button`);

  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
