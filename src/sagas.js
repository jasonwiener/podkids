import { delay } from 'redux-saga'
import {
  select,
  put,
  take,
  takeEvery,
  race,
  call,
  all
} from 'redux-saga/effects'
import { PLAY_BUTTON } from './reducers/PlayerReducer'

function * handlePlayButton (action) {
  console.log('PLAY was clicked!!!')
}

function * watchPlayButton () {
  yield takeEvery(PLAY_BUTTON, handlePlayButton)
}

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield all([watchPlayButton()])
}
