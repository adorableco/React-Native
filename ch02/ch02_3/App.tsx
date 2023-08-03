import React, {Children, Component} from 'react'
import {SafeAreaView, ScrollView, Text} from 'react-native'
import Person from './src/screens/Person'
import * as D from './src/data'

const people = D.makeArray(100).map(D.createRandomPerson)
export default function App() {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ))
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  )
}
