import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../features/Home/HomeScreen';

const Stack = createNativeStackNavigator();

export default class AppStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }
}
