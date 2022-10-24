import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: true,
      email: '',
      password: '',
    };
  }

  setEmail = text => this.setState({email: text});

  setPassword = text => this.setState({password: text});

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView} />
        <View style={styles.bottomView}>
          <View style={styles.textInputArea}>
            <CustomTextInput
              placeholder="Enter your email address here"
              value={this.state.email}
              setValue={this.setEmail}
            />
            <CustomTextInput
              placeholder="Enter your password here"
              value={this.state.password}
              setValue={this.setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE9E9',
  },
  topView: {
    flex: 1,
  },
  bottomView: {
    flex: 2,
    backgroundColor: 'white',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  textInputArea: {
    marginTop: 30,
  },
  Text: {
    textAlign: 'center',
  },
  changeText: {
    borderStartColor: 'blue',
  },
});
