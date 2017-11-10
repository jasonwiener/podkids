import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { downloadRequest } from '../../../reducers/SubscriptionReducer'

class Podcast extends Component {
  componentDidMount () {
    if (_.isEqual(this.props.podcast, {})) {
      this._triggerRssDownload()
    }
  }

  _triggerRssDownload () {
    this.props.dispatch(downloadRequest(this.props.rssUrl))
  }

  _renderCover () {
    if (this.props.podcast.image) {
      return (
        <Image
          source={{
            uri: this.props.podcast.image
          }}
          style={styles.cover}
        />
      )
    } else {
      return (
        <Image
          source={require('../../../../assets/no_cover.png')}
          style={styles.cover}
        />
      )
    }
  }

  render () {
    return (
      <View style={styles.slide}>
        {this._renderCover()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  cover: {
    width: 250,
    height: 250
  }
})

function mapStateToProps (state, ownProps) {
  return {
    podcast: state.subscriptions[ownProps.rssUrl]
  }
}

export default connect(mapStateToProps)(Podcast)
