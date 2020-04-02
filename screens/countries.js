import React from 'react'
import {Text, View } from 'react-native'
import {globalStyles} from '../styles/global'

function Countries() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.headerText}>
          Insert Countries Here
        </Text>
      </View>
    )
}

export default Countries