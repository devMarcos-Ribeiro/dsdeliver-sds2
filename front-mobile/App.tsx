import React from 'react';

import { useFonts, OpenSans_400Regular, OpenSans_700Bold  } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Header from './src/Header/index';
import Home from './src/Home';

export default function App() {
  let [fontsLoades] = useFonts({
    OpenSans_400Regular, 
    OpenSans_700Bold
  });

  if(!fontsLoades) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
