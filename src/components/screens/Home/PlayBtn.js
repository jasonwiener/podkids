import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { playButton } from '../../../reducers/PlayerReducer'

class PlayBtn extends Component {
  render () {
    const icon = this.props.mode === 'play' ? 'pause-circle' : 'play-circle'

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.dispatch(playButton())}
      >
        <Icon name={icon} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  icon: {
    fontSize: 80
  }
})

function mapStateToProps (state) {
  return {
    mode: state.player.mode
  }
}

export default connect(mapStateToProps)(PlayBtn)
