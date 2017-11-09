import { combineReducers } from 'redux'

import nav from './NavigationReducer'
import subscriptions from './SubscriptionReducer'

export default combineReducers({
  nav,
  subscriptions
})
