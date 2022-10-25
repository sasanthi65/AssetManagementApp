import React, {Component} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';
import {Images, Colors} from '../theme';
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
    console.error(this.state.email);
    Alert.alert('Wrong password');
  };

  onForgotPassword = () => {
    console.log('Forgot Password Pressed');
  };

  onPressGoogle = () => {
    console.log('Google Pressed');
  };

  onPressSIgnUp = () => {
    console.log('Sign Up');
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
              autoCompleteType="email"
              keyboardType="email-address"
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
          <Text style={styles.text}>Login via</Text>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.onPressGoogle}>
            <Image style={styles.icon} source={Images.icons.google} />
          </TouchableOpacity>
          <Text style={styles.outerText}>
            Don't have an account?
            <Text style={styles.innerText} onPress={this.onPressSIgnUp}>
              {' '}
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background.PRIMARY_COLOR,
  },
  topView: {
    flex: 1,
  },
  image: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  bottomView: {
    flex: 2,
    backgroundColor: Colors.Background.FULL_WHITE,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  textInputArea: {
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    margin: 20,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 60,
    padding: 10,
    alignSelf: 'center',
    elevation: 8,
  },
  icon: {
    alignSelf: 'center',
  },
  outerText: {
    margin: 15,
    alignSelf: 'center',
  },
  innerText: {
    color: Colors.Text.LINKS,
    fontWeight: 'bold',
  },
});
