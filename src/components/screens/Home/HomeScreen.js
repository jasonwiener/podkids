import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import PodcastSwiper from './PodcastSwiper'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import PlayBtn from './PlayBtn'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    title: 'Podcasts'
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            { marginTop: getStatusBarHeight() },
            styles.settingsContainer
          ]}
        >
          <Icon name='settings' style={styles.settingsIcon} />
        </TouchableOpacity>
        <PodcastSwiper />
        <View style={styles.controlsContainer}>
          <PlayBtn />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DD6EB'
  },
  settingsContainer: {
    // position: 'absolute',
    // right: 15,
    paddingTop: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end'
  },
  settingsIcon: {
    fontSize: 40
  },
  controlsContainer: {
    paddingVertical: 40,
    alignSelf: 'center'
  }
})
