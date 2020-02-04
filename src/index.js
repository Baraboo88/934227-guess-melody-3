import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

const Data = {
  NUMBER_OF_ERRORS: 3
};


ReactDOM.render(<App numberOfErrors = {Data.NUMBER_OF_ERRORS}/>, document.querySelector(`#root`));
