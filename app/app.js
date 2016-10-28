import React, { Component } from 'react'
import { StyleSheet, Text, Image } from 'react-native'

import HtmlEntities from 'html-entities'
import RNShakeEventIOS from 'react-native-shake-event-ios'
import Joke from './component/joke'
// import Error from './component/error'

const htmlEntitiesDecoder = new HtmlEntities.XmlEntities()
const artPauseTimeInMillis = 500

export default class ChuckApp extends Component {
  constructor (props) {
    super(props)
    this.state = { jokeText: 'SHAKE to get a CHUCK NORRIS joke', isLoading: false }
  }

  componentDidMount() {
    RNShakeEventIOS.addEventListener('shake', () => {
      this.fetchJoke()
    })
  }

  componentWillUnmount() {
    RNShakeEventIOS.removeEventListener('shake');
  }

  fetchJoke () {
    this.setState({ jokeText: null, isLoading: true })

    setTimeout(() => {
      fetch('https://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then(responseJson => this.setState({ jokeText: htmlEntitiesDecoder.decode(responseJson.value.joke), isLoading: false }))
        .catch(error => this.setState({ error: error, jokeText: null, isLoading: false }))
      }, artPauseTimeInMillis)
  }

  render () {
    const chuckImage = this.state.isLoading ? require('./../chuck2_black.png') : require('./../chuck2.png')
    return (
      <Image source={chuckImage} style={styles.container}>
        {
          !this.state.isLoading &&
            <Joke text={this.state.jokeText} onTouch={this.fetchJoke.bind(this)} />
        }
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  }
})
