import { Audio } from 'expo'

export default class Player {
  constructor () {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    })

    this.initialStatus = {
      shouldPlay: false,
      rate: 1.0,
      shouldCorrectPitch: true,
      volume: 1.0,
      isMuted: false,
      isLooping: false
    }

    this.playbackInstance = null
  }

  async load (source) {
    if (this.playbackInstance) {
      this.playbackInstance.stopAsync()
    }

    const { sound, status } = await Audio.Sound.create(
      { uri: source },
      this.initialStatus,
      null // onPlaybackStatusUpdate
    )
    this.playbackInstance = sound
  }

  play () {
    if (this.playbackInstance) {
      this.playbackInstance.playAsync()
    }
  }

  pause () {
    if (this.playbackInstance) {
      this.playbackInstance.pauseAsync()
    }
  }

  stop () {
    if (this.playbackInstance) {
      this.playbackInstance.stopAsync()
    }
  }
}
