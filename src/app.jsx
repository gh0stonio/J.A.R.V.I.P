import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './libs/reducers'
import App from './ui/containers/App'

const store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension()))

// import style
require('./ui/assets/styles/app.scss')

// commonjs export instead of es6 because of babel/webpack library export combo
module.exports = class JARVIP {
  constructor (config) {
    this.config = config
    this._render()
  }
  _render () {
    render(
      <Provider store={store}>
        <App video={this.config.video} />
      </Provider>,
      this.config.targetEl
    )
  }
}
