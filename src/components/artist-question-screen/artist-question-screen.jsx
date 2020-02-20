import React from 'react';
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player";

const ArtistQuestionScreen = (props) => {
  const {question, onAnswer} = props;
  const {answers, song} = question;


  const renderAnswers = () =>
    answers.map((answer, index) => (
      <div className="artist" key={index}>
        <input
          data-test = 'test-answer-button'
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={answer.artist}
          id={`artist-${index}`}
          onChange={() => {
            onAnswer(question, answer);
          }}
        />
        <label
          className="artist__name"
          htmlFor={`artist-${index}`}
        >
          <img className="artist__picture" src={answer.picture} alt="Пелагея" />
          {answer.artist}
        </label>
      </div>
    ));

  return (
    <section className="game game--artist">
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
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              src={song.src}
              isPlaying={props.activePlayerId === 0}
              onPlayButtonClick={() => props.onPlayButtonClick(0)}
            />
          </div>
        </div>

        <form className="game__artist">
          {answers && renderAnswers()}
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired,
  activePlayerId: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
