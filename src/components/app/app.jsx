import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {GameType} from '../../utils/const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import withActivePlayer from '../../hocs/with-audio-player/with-audio-player';
import {Action, actionCreator} from '../../reducer';
import {connect} from 'react-redux';


const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends Component {

  _renderGame() {
    const {
      step,
      maxMistakesNumber,
      questions,
      onWelcomeButtonClick,
      onUserAnswer,
      mistakesNumber
    } = this.props;

    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          numberOfErrors={maxMistakesNumber}
          onStartButtonClick={onWelcomeButtonClick}
        />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionScreenWrapped
            question={question}
            onAnswer={onUserAnswer}
            mistakes={mistakesNumber}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionScreenWrapped
            question={question}
            onAnswer={onUserAnswer}
            mistakes={mistakesNumber}
          />
        );
      default:
        return null;
    }
  }
  render() {
    const [genreQuestion, artistQuestion] = this.props.questions;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/dev-genre">
            <GenreQuestionScreenWrapped question={genreQuestion} onAnswer={() => {}} />
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreenWrapped question={artistQuestion} onAnswer={() => {}} />
          </Route>
          <Route exact path="/">
            {this._renderGame()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  maxMistakesNumber: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string,
    song: PropTypes.object,
    answers: PropTypes.array.isRequired
  })),
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakesNumber: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakesNumber: state.maxMistakesNumber,
  questions: state.questions,
  mistakesNumber: state.mistakesNumber
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch({
      type: Action.INCREMENT_STEP,
      payload: 1
    });
  },
  onUserAnswer(question, answer) {
    dispatch(actionCreator.incrementMistake(question, answer));
    dispatch(actionCreator.incrementStep());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
