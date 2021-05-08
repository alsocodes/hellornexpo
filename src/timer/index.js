import React, { Component } from 'react'
import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

class Timer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button 
                        iconName="play-circle"
                        onPress={() => Alert.alert("Start timer")}/>

                    <Button 
                        iconName="stop-circle"
                        onPress={() => Alert.alert("Stop timer")}/>
                </View>

                {/* <Text>Timer Component</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000000",
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lower:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    time:{
        color:'#ffffff',
        fontSize:120,
        fontWeight:'100'
    }
})

export default Timer
