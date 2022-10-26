import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    const email = this.props.route.params;
    return (
      <View>
        <Text>Welcome Home {email}</Text>
      </View>
    );
  }
}
