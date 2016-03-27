import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
  videos: []
}

let store = configureStore(initialState)

// configure + create store

render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('app')
)
