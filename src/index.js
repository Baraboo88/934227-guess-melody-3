import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import questions from "./moks/questions";

const data = {
  numberOfErrors: 3,
  questions
};


ReactDOM.render(<App {...data}/>, document.querySelector(`#root`));
