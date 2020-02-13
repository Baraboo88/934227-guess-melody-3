import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {GameType} from '../../utils/const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: -1
    };
    this._nextScreenHandler = this._nextScreenHandler.bind(this);
  }

  _nextScreenHandler() {
    this.setState((prevState) => ({step: ++prevState.step}));
  }

  _renderGame() {
    const {numberOfErrors, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          numberOfErrors={numberOfErrors}
          onStartButtonClick={this._nextScreenHandler}
        />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return <ArtistQuestionScreen question={question} onAnswer={this._nextScreenHandler} />;
      case GameType.GENRE:
        return <GenreQuestionScreen question={question} onAnswer={this._nextScreenHandler} />;
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
            <GenreQuestionScreen question={genreQuestion} onAnswer={this._nextScreenHandler}/>
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen question={artistQuestion} onAnswer={this._nextScreenHandler}/>
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
  questions: PropTypes.array.isRequired,
  numberOfErrors: PropTypes.number
};
export default App;
