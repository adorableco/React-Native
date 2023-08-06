import React from 'react'
//prettier-ignore
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text, View} from 'react-native'
import {MD2Colors} from 'react-native-paper'

const {width, height} = Dimensions.get('window')
//prettier-ignore
export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>os:{Platform.OS} </Text>
      <Text style={[styles.text]}>width: {width} px</Text>
      <Text style={[styles.text]}>os:height: {height} px</Text>

      <View style={[styles.box, styles.border]}/>
      <View style={[styles.box, styles.border, {borderRadius: 20}]}/>
      <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}/>
    </SafeAreaView>
  )
}

//prettier-ignore
const styles = StyleSheet.create({
  SafeAreaView: {backgroundColor: MD2Colors.blue500, flex: 1,
  paddingLeft: Platform.select({ios:0, android:20})},
  text: {color: MD2Colors.blue200, fontSize:20},
  box: {height: 100, backgroundColor: MD2Colors.lime500, marginBottom: 10,
  marginLeft: Platform.select({ios: 20, android:0})},
  border: { borderWidth: 10, borderColor: MD2Colors.blue900}
})
