import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter, createBrowserHistory } from 'redux-router'
import routes from '../routes'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ routes, createBrowserHistory })
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
