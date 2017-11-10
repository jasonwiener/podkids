import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './src/reducers'
import rootSaga from './src/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  undefined, // initialState
  compose(
    applyMiddleware(thunk, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )
)

sagaMiddleware.run(rootSaga)

export default store
