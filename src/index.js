import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet from 'react-jss'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Container from './container'
import reducer from './reducer'
import css from './css'

const App = injectSheet(css)(Container)
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // eslint-disable-line
)
