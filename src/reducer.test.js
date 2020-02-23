import {reducer, actionCreator, Action} from "./reducer.js";
import questions from './moks/questions';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    step: -1,
    mistakesNumber: 0,
    maxMistakesNumber: 3,
    questions,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakesNumber: 0,
    questions,
  }, {
    type: Action.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakesNumber: 0,
    questions,
  });

  expect(reducer({
    step: -1,
    mistakesNumber: 0,
    questions,
  }, {
    type: Action.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakesNumber: 0,
    questions,
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakesNumber: 0,
  }, {
    type: Action.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakesNumber: 1,
  });

  expect(reducer({
    step: -1,
    mistakesNumber: 0,
  }, {
    type: Action.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakesNumber: 0,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(actionCreator.incrementStep()).toEqual({
      type: Action.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(actionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `correct`,
      picture: ``,
    })).toEqual({
      type: Action.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(actionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `incorrect`,
      picture: ``,
    })).toEqual({
      type: Action.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(actionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `jazz`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: Action.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(actionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: Action.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
