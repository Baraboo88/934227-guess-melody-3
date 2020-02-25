import React from 'react';
import PropTypes from 'prop-types';
import {actionCreator} from '../../reducer';
import {connect} from 'react-redux';

const WelcomeScreen = (props) => {
  const {onStartButtonClick, numberOfErrors, nextType, nextId} = props;

  return (
    <section className="main" id="root">
      <section className="welcome">
        <div className="welcome__logo">
          <img src="/img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
        </div>
        <button
          className="welcome__button"
          onClick={() => {
            onStartButtonClick();
            if (nextType) {
              props.history.push(`/game/${nextType}/${nextId}`);
            }
          }}
          data-test="test-start-button"
        >
          <span className="visually-hidden">Начать игру</span>
        </button>
        <h2 className="welcome__rules-title">Правила игры</h2>
        <p className="welcome__text">Правила просты:</p>
        <ul className="welcome__rules-list">
          <li>Нужно ответить на все вопросы.</li>
          <li>Можно допустить {numberOfErrors} ошибки.</li>
        </ul>
        <p className="welcome__text">Удачи!</p>
      </section>
    </section>
  );
};

WelcomeScreen.propTypes = {
  numberOfErrors: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired,
  nextType: PropTypes.string,
  nextId: PropTypes.number,
  history: PropTypes.object,
};

const mapStateToProps = (state) => {
  if (state.questions && state.questions.length > 0) {

    return {
      numberOfErrors: state.maxMistakesNumber,
      nextType: state.questions[0].type,
      nextId: state.questions[0].id
    };
  }

  return {
    numberOfErrors: state.maxMistakesNumber,
    questions: state.questions
  };
};

const mapDispatchToProps = (dispatch) => ({
  onStartButtonClick() {
    dispatch(actionCreator.incrementStep());
  }
});

export {WelcomeScreen};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
