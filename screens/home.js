import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { globalStyles } from '../styles/global'
import { Ionicons } from '@expo/vector-icons'

function Home({ navigation }) {
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={globalStyles.container}>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.card}>
            <View style={styles.card1}>
              <View style={styles.imageBox}>
                <Image source={require('../assets/images/arIcon.png')} style={styles.image}></Image>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardHeaderText}>View Country in AR</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Countries')}>
          <View style={styles.card}>
            <View style={styles.card2}>
              <View style={styles.imageBox}>
                <Image source={require('../assets/images/heritageIcon.png')} style={styles.image}></Image>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardHeaderText}>World Heritage Sites</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Wander Woman')}>
          <View style={styles.card}>
            <View style={styles.card3}>
              <View style={styles.imageBox}>
                <Image source={require('../assets/images/gameIcon.png')} style={styles.image}></Image>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.cardHeaderText}>Wander Woman</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.chatContainer}>
          <TouchableOpacity>
            <View style={styles.chatButton}>
              <Ionicons name='ios-chatboxes' size={42} style={styles.chatIcon}></Ionicons>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  card: {
    width: 336,
    height: 160,
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  imageBox: {
    width: 143,
    height: 160,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#f7f7f7",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 3,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 110,
    height: 110
  },
  card1: {
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: "#007aff",
  },
  card2: {
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: "#34c759",
  },
  card3: {
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: "#ff2d55",
  },
  textContainer: {
    flex: 1,
    marginStart: 25,
    justifyContent: "center"
  },
  cardHeaderText: {
    width: 128,
    fontSize: 28,
    fontWeight: "900",
    fontStyle: "normal",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "center",
    color: "#f7f7f7",
  },
  chatContainer:{
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  chatButton: {
    marginTop: 10,
    width: 80,
    height: 81,
    backgroundColor: "#37373C",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#37373C",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: 'center',
  },
  chatIcon: {
    color: '#CFCFCF'
  },
})