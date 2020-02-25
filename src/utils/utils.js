import {actionCreator} from "../reducer";

export const mapStateToProps = (state, props) => {
  if (state.step >= state.questions.length) {
    props.history.push(`/`);
  }
  const id = props.match.params.id;

  let question = state.questions.find((newOffer) => newOffer.id === Number(id));

  if (!question) {
    props.history.push(`/`);
  }
  const nextQuestion = state.questions[state.step + 1] ? {nextType: state.questions[state.step + 1].type, nextId: state.questions[state.step + 1].id} : {nextType: null, nextId: null};
  return {
    question,
    mistakes: state.mistakesNumber,
    nextType: nextQuestion.nextType,
    nextId: nextQuestion.nextId
  };
};

export const mapDispatchToProps = (dispatch) => ({
  onAnswer(question, answer) {
    dispatch(actionCreator.incrementMistake(question, answer));
    dispatch(actionCreator.incrementStep());
  }
});
