import { createStore, applyMiddleware } from 'redux'
import appReducer from './App/app.reducer'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

export default (initialState) =>
  createStore(appReducer, initialState, middleware)
