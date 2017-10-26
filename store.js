import { createStore, compose } from 'redux'
import reducers from './src/reducers'

const store = createStore(
  reducers,
  undefined, // initialState
  compose(
    // applyMiddleware(sagaMiddleware, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )
)

export default store
