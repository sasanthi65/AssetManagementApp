import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../features/Auth/screens/LoginScreen';
import HomeScreen from '../features/Home/HomeScreen';

const Stack = createNativeStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }
}
