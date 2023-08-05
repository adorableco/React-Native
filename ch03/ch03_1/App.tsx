import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {MD2Colors} from 'react-native-paper'

console.log(MD2Colors.blue500)
export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MD2Colors.blue500,
  },
  text: {fontSize: 20, color: MD2Colors.blue200},
})
