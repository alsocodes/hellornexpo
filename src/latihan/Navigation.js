import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetApi from './GetApi'
import GetApiDetail from './GetApiDetail'

function HomeScreen({route, navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details',{
                    data:"data dari home OK"
                })}
            />
        </View>
    );
}

function DetailsScreen({route, navigation}) {
    const { data } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{JSON.stringify(data)}</Text>

            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
                <Stack.Screen name="GetApi" component={GetApi}/>
                <Stack.Screen name="GetApiDetail" component={GetApiDetail} test="123455"/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}