import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationX from './src/latihan/Navigation'

export default function App() {
  return (
    <NavigationX/>
    // <View style={styles.container}>
    //   <Text>HELLO WORLD GEKdjsdkjekdfwj!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
