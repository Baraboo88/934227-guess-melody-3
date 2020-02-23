import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app.jsx";
import questions from "./moks/questions";
import {createStore} from 'redux';
import {reducer} from "./reducer";
import {Provider} from "react-redux";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

const data = {
  numberOfErrors: 3,
  questions
};


ReactDOM.render(<Provider store={store}><App {...data}/></Provider>, document.querySelector(`#root`));
