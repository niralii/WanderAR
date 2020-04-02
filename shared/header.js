import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons'


export default function HeaderMain({navigation, title, icon}) {
  const openInfo = () => {
    navigation.navigate('Info')
  }  
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
      <TouchableOpacity style={styles.iconTouch} onPress={openInfo}>
        <Ionicons
          name='md-information-circle-outline'
          size={35}
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
    justifyContent: 'center',

  },
  headerBox: {
    width: 150,
  },
  iconTouch: {
    position: 'absolute',
    right: -45,
  },
  icon: {
    color: '#1592e6'
  }
})
