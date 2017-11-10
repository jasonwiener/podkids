const PODCAST_SELECTED = 'PODCAST_SELECTED'

export const podcastSelected = rssUrl => {
  return {
    type: PODCAST_SELECTED,
    rssUrl
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

    default:
      return state
  }
}
