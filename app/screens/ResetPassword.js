import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';
import {Images} from '../theme';
export default class ResetPassword extends Component {
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
          <Text style={styles.titleText}> Reset Password </Text>
          <View style={styles.textInputArea}>
            <CustomTextInput
              placeholder="Password"
              value={this.state.email}
              setValue={this.setEmail}
            />
            
            <CustomTextInput
              placeholder="New Password"
              value={this.state.password}
              setValue={this.setPassword}
              secureTextEntry={true}
            />
          </View>
          
          <CustomButton title="Submit" onPress={this.onLoginPressed} />
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
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft:"10"
  }
});
