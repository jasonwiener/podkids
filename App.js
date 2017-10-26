import React from 'react'
import { Provider } from 'react-redux'
import RootNavigation from './src/RootNavigation'
import store from './store'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    )
  }
}
