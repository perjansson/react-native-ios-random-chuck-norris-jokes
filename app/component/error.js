import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default Error = (props) => {
  return (
    <TouchableOpacity onPress={props.onTouch}>
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    margin: 25,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 2
  },
  error: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Gill Sans'
  }
})
