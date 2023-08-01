import React from 'react'
import {SafeAreaView, Text} from 'react-native'

export default function App() {
  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello world! {index}</Text>)

  return <SafeAreaView>{children}</SafeAreaView>
}
