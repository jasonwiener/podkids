import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

class PlayBtn extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon name='play-circle' style={styles.icon} />
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

export default PlayBtn
