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
import {
  PLAY_BUTTON,
  PODCAST_SELECTED,
  modeChanged
} from './reducers/PlayerReducer'
import Player from '../src/helpers/Player'

const player = new Player()

// selector helpers
const getPodcast = state => {
  return state.subscriptions[state.player.selectedRssUrl]
}

const getMode = state => state.player.mode

function * handlePlayButton (action) {
  console.log('PLAY was clicked!!!')

  const currentMode = yield select(getMode)

  if (currentMode === 'stop') {
    const podcast = yield select(getPodcast)
    const episodeUrl = podcast.episodes[0].enclosure.url

    yield player.load(episodeUrl)
    player.play()
    yield put(modeChanged('play'))
  } else if (currentMode === 'play') {
    player.pause()
    yield put(modeChanged('pause'))
  } else if (currentMode === 'pause') {
    player.play()
    yield put(modeChanged('play'))
  }
}

function * watchPlayButton () {
  yield takeEvery(PLAY_BUTTON, handlePlayButton)
}

function * watchPodcastSelected () {
  yield takeEvery(PODCAST_SELECTED, handlePodcastSelected)
}

function * handlePodcastSelected (action) {
  player.stop()
  yield put(modeChanged('stop'))
}

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield all([watchPlayButton(), watchPodcastSelected()])
}
