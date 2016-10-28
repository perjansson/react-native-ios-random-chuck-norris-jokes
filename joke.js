import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default Joke = (props) => {
  return (
    <TouchableOpacity onPress={props.onTouch}>
      <View style={styles.jokeContainer}>
        <Text style={styles.joke}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  jokeContainer: {
    margin: 25,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 2
  },
  joke: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Gill Sans'
  }
})
