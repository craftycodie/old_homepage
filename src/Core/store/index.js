import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import blogReducer from '../../Blog/reducers/blogReducer'
import authReducer from '../../Authentication/reducers/authReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()

const appReducers = combineReducers({
  authReducer, blogReducer, userReducer
})

const reducers = (state, action) => {
  if (action.type === 'AUTHENTICATION_ACTION_LOGOUT') {
    state = undefined
  }
  return appReducers(state, action)
}

const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancers(
    persistState('auth'),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
)

export default store
