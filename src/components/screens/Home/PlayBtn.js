import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { connect } from 'react-redux'

class PlayBtn extends Component {
  render () {
    const icon = this.props.mode === 'play' ? 'stop-circle' : 'play-circle'

    return (
      <TouchableOpacity style={styles.container}>
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
