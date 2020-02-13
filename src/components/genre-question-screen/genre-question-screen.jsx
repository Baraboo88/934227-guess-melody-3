import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {answers: [...this.props.question.answers.map(() => false)]};
    this._submitClickHandler = this._submitClickHandler.bind(this);
    this._answerCheckHandler = this._answerCheckHandler.bind(this);
  }

  _submitClickHandler(evt) {
    const {onAnswer} = this.props;

    evt.preventDefault();
    onAnswer(this.props.question, this.state.answers);
  }

  _answerCheckHandler(index) {
    this.setState((prevState) => {
      const newAnswers = [...prevState.answers];
      newAnswers[index] = !newAnswers[index];
      return {answers: newAnswers};
    });
  }

  _renderTracks(answers) {
    return answers.map((answer, index) => (
      <div className="track" key={index}>
        <button className="track__button track__button--play" type="button"></button>
        <div className="track__status">
          <audio></audio>
        </div>
        <div className="game__answer">
          <input
            className="game__input visually-hidden"
            type="checkbox"
            name="answer"
            value={answer.genre}
            id={`answer-${index}`}
            onChange={() => this._answerCheckHandler(index)}
          />
          <label className="game__check" htmlFor={`answer-${index}`}>
            Отметить
          </label>
        </div>
      </div>
    ));
  }

  render() {
    const {answers} = this.props.question;
    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle
              className="timer__line"
              cx="390"
              cy="390"
              r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }}
            />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks" onSubmit={this._submitClickHandler} data-test = 'test-answer-form-send'>
            {answers && this._renderTracks(answers)}

            <button className="game__submit button" type="submit">
              Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired
};

export default GenreQuestionScreen;
