/* eslint-disable no-underscore-dangle */
import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet from 'react-jss'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Container from './container'
import reducer from './reducer'
import css from './css'

const App = injectSheet(css)(Container)
const dev = process.env.NODE_ENV === 'development' ?
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() :
  undefined
const store = createStore(reducer, dev)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
