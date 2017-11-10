export const PODCAST_SELECTED = 'PODCAST_SELECTED'
export const PLAY_BUTTON = 'PLAY_BUTTON'

export const podcastSelected = rssUrl => {
  return {
    type: PODCAST_SELECTED,
    rssUrl
  }
}

export const playButton = () => {
  return {
    type: PLAY_BUTTON
  }
}

const initialState = {
  selectedRssUrl: '',
  mode: 'stop'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PODCAST_SELECTED:
      return {
        ...state,
        selectedRssUrl: action.rssUrl,
        mode: 'stop'
      }

    case PLAY_BUTTON:
      return {
        ...state,
        mode: state.mode === 'play' ? 'pause' : 'play'
      }

    default:
      return state
  }
}
