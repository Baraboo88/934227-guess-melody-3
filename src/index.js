import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";

const startButtonClickHandler = () => {};
const data = {
  numberOfErrors: 3,
  startButtonClickHandler
};


ReactDOM.render(<App {...data}/>, document.querySelector(`#root`));
