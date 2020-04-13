import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function Web({route}) {
const COUNTRY = route.params?.countryCode ?? 'in';
  return (
    <WebView source={{ uri: 'https://whc.unesco.org/en/statesparties/' + COUNTRY}} />
  )
}