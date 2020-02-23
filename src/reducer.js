import questions from './moks/questions';
import {GameType} from './utils/const';

const initialState = {
  mistakesNumber: 0,
  maxMistakesNumber: 3,
  step: -1,
  questions
};

export const Action = {
  INCREMENT_MISTAKES: `increment-mistakes`,
  INCREMENT_STEP: `increment-step`
};

const isArtistAnswersCorrect = (question, answer) => {
  return question.song.artist === answer.artist;
};

const isGenreAnswersCorrect = (question, answers) => {
  return answers.every(
      (answer, index) => answer === (question.answers[index].genre === question.genre)
  );
};

export const actionCreator = {
  incrementStep: () => ({
    type: Action.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistake: (question, answers) => {
    let answerIsCorrect = false;
    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswersCorrect(question, answers);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswersCorrect(question, answers);
        break;
    }

    return {
      type: Action.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.INCREMENT_MISTAKES:
      const newMistakesNumber = state.mistakesNumber + action.payload;
      if (newMistakesNumber >= state.maxMistakesNumber) {
        return Object.assign({}, initialState);
      }
      return Object.assign({}, state, {mistakesNumber: action.payload});
    case Action.INCREMENT_STEP:

      const newStep = state.step + action.payload;
      if (newStep > state.step.length) {
        return Object.assign({}, initialState);
      }
      return Object.assign({}, state, {step: newStep});
  }

  return state;
};
