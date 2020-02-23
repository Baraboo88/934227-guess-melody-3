import React from 'react';
import PropTypes from 'prop-types';

const GameMistakes = (props) => {
  const {mistakes} = props;

  return (
    <div className="game__mistakes">
      {[...new Array(mistakes)].map((_, index) => (
        <div key={index} className="wrong"></div>
      ))}
    </div>
  );
};

GameMistakes.propTypes = {
  mistakes: PropTypes.number.isRequired
};

export default GameMistakes;
