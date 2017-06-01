import { apiMiddleware } from 'redux-api-middleware'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { logger } from '../middleware'
import rootReducer from '../reducers'
import persistState from 'redux-localstorage'

export default function configure(initialState = {}) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = compose(
    applyMiddleware(logger),
    applyMiddleware(thunk, apiMiddleware),
    persistState(['user']),
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
