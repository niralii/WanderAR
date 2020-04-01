import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons'

const openInfo = () => {

}

export default function HeaderMain({navigation, title, icon}) {
  if(icon === "false") {
    return (
      <View style={styles.header}>
      <View style={styles.headerBox}>
        <Text style={globalStyles.headerText}>{title}</Text>
      </View>
    </View>
    )
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerBox}>
        <Text style={globalStyles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.iconTouch} onPress={() => navigation.navigate('Info')}>
        <Ionicons
          name='md-information-circle-outline'
          size={28}
          style={styles.icon}>
        </Ionicons>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerBox: {
    width: 150
  },
  iconTouch: {
    position: 'absolute',
    right: -45,
  },
  icon: {
    color: '#1592e6'
  }
})
