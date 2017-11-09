import parsePodcastFeed from '../helpers/podcastParser'

// const DOWNLOAD_REQUEST = 'DOWNLOAD_REQUEST'
const DOWNLOAD_SUCCESS = 'DOWNLOAD_SUCCESS'

export const downloadRequest = rssUrl => {
  return async dispatch => {
    const podcastData = await parsePodcastFeed(rssUrl)
    dispatch(downloadSuccess(rssUrl, podcastData))
  }
}

const downloadSuccess = (rssUrl, parsedRssObj) => {
  return {
    type: DOWNLOAD_SUCCESS,
    rssUrl,
    payload: parsedRssObj
  }
}

const initialState = {
  'http://www.br-online.de/podcast/betthupferl/cast.xml': {},
  'http://www1.wdr.de/radio/podcasts/kiraka/baerenbude112.podcast': {},
  'http://www.ohrenbaer.de/podcast/podcast.feed.podcast.xml': {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_SUCCESS:
      const newState = { ...state }
      newState[action.rssUrl] = action.payload
      return newState

    default:
      return state
  }
}
