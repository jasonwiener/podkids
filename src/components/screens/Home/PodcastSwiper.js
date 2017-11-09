import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import _ from 'lodash'
import Podcast from './Podcast'

class PodcastSwiper extends Component {
  _renderSubscriptions () {
    return _.map(this.props.subscriptions, (meta, rssUrl) => (
      <Podcast key={rssUrl} rssUrl={rssUrl} />
    ))
  }

  render () {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        loop={false}
        onIndexChanged={index => console.log(`new index: ${index}`)}
      >
        {this._renderSubscriptions()}
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

function mapStateToProps (state) {
  return {
    subscriptions: state.subscriptions
  }
}

export default connect(mapStateToProps)(PodcastSwiper)
