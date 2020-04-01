import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home'
import Countries from '../screens/countries'
import HeaderMain from '../shared/header'


const HomeStack = createStackNavigator()

function RootStack() {
    return (
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={
          { gestureEnabled: false, 
          headerTintColor:'#444',
          headerStyle: {
            backgroundColor: '#eee',
            borderBottomColor: '#707070'
          }}
          }
      >
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: () => <HeaderMain></HeaderMain>}}
        />
        <HomeStack.Screen
          name="Countries"
          component={Countries}
          initialParams={{ user: 'me' }}
        />
      </HomeStack.Navigator>
    );
}

export default RootStack