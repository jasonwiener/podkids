export const PODCAST_SELECTED = 'PODCAST_SELECTED'
export const PLAY_BUTTON = 'PLAY_BUTTON'
export const MODE_CHANGED = 'MODE_CHANGED'

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

export const modeChanged = newMode => {
  return {
    type: MODE_CHANGED,
    newMode
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
        selectedRssUrl: action.rssUrl
      }

    case MODE_CHANGED:
      return {
        ...state,
        mode: action.newMode
      }

    default:
      return state
  }
}
