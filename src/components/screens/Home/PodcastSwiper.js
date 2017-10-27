import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import PodcastCover from './PodcastCover'

class PodcastSwiper extends Component {
  render () {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        loop={false}
        onIndexChanged={index => console.log(`new index: ${index}`)}
      >
        <PodcastCover imageUrl='http://www.br-online.de/podcast/betthupferl/cover.jpg' />
        <PodcastCover imageUrl='http://www1.wdr.de/mediathek/audio/sendereihen-bilder/kiraka_sendereihenbild100~_v-Podcast.jpg' />
        <PodcastCover imageUrl='https://www.ohrenbaer.de/content/dam/rbb/ohr/bilder/ohrenbaer_podcast.jpg.jpg/img.jpg' />
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth: 10,
    // borderColor: 'lime',
    height: 400
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default PodcastSwiper
