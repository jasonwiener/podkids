import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import PodcastSwiper from './PodcastSwiper'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    title: 'Podcasts'
  }

  render () {
    return (
      <View style={styles.container}>
        <PodcastSwiper />
        <TouchableOpacity
          style={[{ top: getStatusBarHeight() }, styles.settingsContainer]}
        >
          <Icon name='settings' style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingsContainer: {
    position: 'absolute',
    right: 15,
    paddingTop: 10,
    backgroundColor: 'transparent'
  },
  settingsIcon: {
    fontSize: 40
  }
})
