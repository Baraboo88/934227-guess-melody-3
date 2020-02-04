import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

const data = {
  numberOfErrors: 3
};


ReactDOM.render(<App {...data}/>, document.querySelector(`#root`));
