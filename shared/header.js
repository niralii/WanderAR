import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons'

const openInfo = () => {

}

export default class HeaderMain extends Component {
  render() {
    return (
      <View style={styles.header}>
      <TouchableOpacity style={styles.iconTouch}>
      <Ionicons
          name='md-information-circle-outline'
          size={28}
          style={styles.icon}>
        </Ionicons>
      </TouchableOpacity>
        <View>
        <Text style={globalStyles.headerText}>WanderAR</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconTouch: {
    position:'absolute',
    right: -50,
  },
  icon:{
    color: '#1592e6'
  }
})
