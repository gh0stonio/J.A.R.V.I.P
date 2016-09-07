import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// import style
require('./assets/styles/app.scss');

// commonjs export instead of es6 because of babel/webpack library export combo
module.exports = class JARVIP {
  constructor (config) {
    this.config = config;
    this._render();
  }
  _render () {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app')
    );
  }
};
