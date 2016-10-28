import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default Joke = (props) => {
  return <View style={styles.jokeContainer}><Text style={styles.joke}>{props.text}</Text></View>
}

const styles = StyleSheet.create({
  jokeContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 2
  },
  joke: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Gill Sans'
  }
})
