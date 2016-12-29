// @flow

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import DefaultRenderer from './renderers/Video'
import type { playerConfigType } from './types'

const store = createStore(reducer)

module.exports = class JARVIP {
  _config: playerConfigType;
  _el: HTMLElement;

  constructor(config: playerConfigType) {
    this._config = config
    this._el = document.getElementById(this._config.target)

    this.render()
  }
  render() {
    // Add renderer selection process
    const Renderer = DefaultRenderer

    render(
      <Provider store={store}>
        <Renderer video={this._config.video} />
      </Provider>,
      this._el
    )
  }
}
