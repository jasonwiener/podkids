import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Home from './components/screens/Home/HomeScreen'

export const RootStackNavigatior = StackNavigator({
  Home: { screen: Home }
})

class RootNavigation extends Component {
  render () {
    return (
      <RootStackNavigatior
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(RootNavigation)
