import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/homeStack'

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false)
  return (
    <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  )
  // if(fontsLoaded) {
  //   return(
  //     <NavigationContainer>
  //       <Navigator></Navigator>
  //     </NavigationContainer>
  //   )
  // } else {
  //   return(
  //     <AppLoading
  //     startAsync={getFonts}
  //     onFinish={()=>setFontsLoaded(true)}
  //     onError={console.warn}>
  //     </AppLoading>
  //   )
  // }
}

