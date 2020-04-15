import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Countries from '../screens/countries'
import CountriesAR from '../screens/countriesAR'
import HeaderMain from '../shared/header'
import Info from '../screens/info'
import Web from '../screens/web'
import Game from '../screens/game'

const HomeStack = createStackNavigator()

function RootStack() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          gestureEnabled: false,
          headerTintColor: '#1592e6',
          headerStyle: {
            backgroundColor: '#E4E4E4',
            borderBottomColor: 'black'
          }
        }
      }
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={
          ({ navigation }) => ({
            headerTitle: () => <HeaderMain navigation={navigation} title='WanderAR'></HeaderMain>
          })
        }
      />
      <HomeStack.Screen
        name="Countries"
        component={Countries}
        options={
          ({ navigation }) => ({
            headerTitle: () => <HeaderMain navigation={navigation} title='Select Country'></HeaderMain>
          })
        }
        initialParams={{ user: 'me' }}
      />
      <HomeStack.Screen
        name="Info"
        component={Info}
        options={
          ({ navigation }) => ({
            headerTitle: () => <HeaderMain navigation={navigation} title='Categorization' icon='false'></HeaderMain>
          })
        }
        initialParams={{ user: 'me' }}
      />
      <HomeStack.Screen
        name="Sites"
        component={Web}
        options={
          ({ navigation }) => ({
            headerTitle: () => <HeaderMain navigation={navigation} title='Heritage Sites'></HeaderMain>
          })
        }
        initialParams={{ user: 'me' }}
      />
      <HomeStack.Screen
        name="Wander Woman"
        component={Game}
        options={
          ({ navigation }) => ({
            headerTitle: () => <HeaderMain navigation={navigation} title='Wander Woman' icon='false'></HeaderMain>
          })
        }
        initialParams={{ user: 'me' }}
      />
      <HomeStack.Screen
        name="CountriesAR"
        component={CountriesAR}
        options={
          ({ navigation }) => ({
            headerTitle: () => <HeaderMain navigation={navigation} title='Select Country'></HeaderMain>
          })
        }
        initialParams={{ user: 'me' }}
      />
    </HomeStack.Navigator>
  );
}

export default RootStack