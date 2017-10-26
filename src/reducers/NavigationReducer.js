import { NavigationActions } from 'react-navigation'
import { RootStackNavigatior } from '../RootNavigation'

const initialState = RootStackNavigatior.router.getStateForAction(
  NavigationActions.init()
)

export default (state = initialState, action) => {
  const nextState = RootStackNavigatior.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
