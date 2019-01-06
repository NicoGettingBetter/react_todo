import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      multi,
      thunk,
      apiMiddleware,
      createLogger({collapsed: true})
    )
  )
)

export default store
