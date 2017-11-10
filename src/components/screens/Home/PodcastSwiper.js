import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import _ from 'lodash'
import Podcast from './Podcast'
import { podcastSelected } from '../../../reducers/PlayerReducer'

class PodcastSwiper extends Component {
  constructor (props) {
    super(props)

    this._handleSwipe = this._handleSwipe.bind(this)

    this.state = {
      rssUrls: _.map(props.subscriptions, (meta, rssUrl) => rssUrl)
    }
  }

  componentDidMount () {
    this._handleSwipe(0)
  }

  componentWillReceiveProps (nextProps) {
    const oldRssUrls = _.map(this.props.subscriptions, (meta, rssUrl) => rssUrl)
    const newRssUrls = _.map(nextProps.subscriptions, (meta, rssUrl) => rssUrl)

    if (!_.isEqual(oldRssUrls, newRssUrls)) {
      this.setState({ rssUrls: newRssUrls })
    }
  }

  _renderSubscriptions () {
    return this.state.rssUrls.map(rssUrl => (
      <Podcast key={rssUrl} rssUrl={rssUrl} />
    ))
  }

  _handleSwipe (newIndex) {
    console.log(`new index: ${newIndex}`)
    console.log(`new rssFeed: ${this.state.rssUrls[newIndex]}`)
    this.props.dispatch(podcastSelected(this.state.rssUrls[newIndex]))
  }

  render () {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        loop={false}
        onIndexChanged={this._handleSwipe}
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
