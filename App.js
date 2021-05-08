import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationX from './src/latihan/Navigation'
import GetApi from './src/latihan/GetApi'
import StopWatch from './src/latihan/StopWatch'
import Timer from './src/timer';

export default class App extends Component{
    render(){
        return <Timer/>
    }
}

// export default function App() {
//   return (
//     <StopWatch />
//     // <GetApi/>
//     //<NavigationX/>
//     // <View style={styles.container}>
//     //   <Text>HELLO WORLD GEKdjsdkjekdfwj!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
