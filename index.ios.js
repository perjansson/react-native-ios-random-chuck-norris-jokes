import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, Image } from 'react-native'
import HtmlEntities from 'html-entities'
import Joke from './joke'

const htmlEntitiesDecoder = new HtmlEntities.XmlEntities()

export default class ChuckApp extends Component {
  constructor (props) {
    super(props)
    this.state = { jokeText: null }

    fetch('https://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(responseJson => this.setState({ jokeText: htmlEntitiesDecoder.decode(responseJson.value.joke) }))
      .catch(error => console.error(error))
  }

  render () {
    return (
      <Image source={require('./chuck.png')} style={styles.container}>
        <Joke text={this.state.jokeText} />
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

AppRegistry.registerComponent('AwesomeProject', () => ChuckApp)
