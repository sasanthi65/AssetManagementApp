import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';
import {Images} from '../theme';
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

  onLoginPressed = () => {
    console.log('Login Pressed');
  };

  onForgotPassword = () => {
    console.log('Forgot Password Pressed');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image style={styles.image} source={Images.backgrounds.login} />
        </View>
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
          <CustomButton
            title="Forgot Password?"
            onPress={this.onForgotPassword}
            type="TERTIARY"
          />
          <CustomButton title="LOGIN" onPress={this.onLoginPressed} />
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
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
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
});
