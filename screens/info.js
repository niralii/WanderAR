import React from 'react'
import {Text, View } from 'react-native'
import {globalStyles} from '../styles/global'

function Info() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.headerText}>
          Hi
        </Text>
      </View>
    )
}

export default Info