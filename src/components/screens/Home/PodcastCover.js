import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class PodcastCover extends Component {
  render () {
    return (
      <View style={styles.slide1}>
        <Image
          source={{
            uri: this.props.imageUrl
          }}
          style={{ width: 250, height: 250 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
})

export default PodcastCover
