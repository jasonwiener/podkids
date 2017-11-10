import { combineReducers } from 'redux'

import nav from './NavigationReducer'
import subscriptions from './SubscriptionReducer'
import player from './PlayerReducer'

export default combineReducers({
  nav,
  subscriptions,
  player
})
