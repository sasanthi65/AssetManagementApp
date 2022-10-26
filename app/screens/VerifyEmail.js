import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View,Button} from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
        
          <Image style={styles.image} source={Images.backgrounds.login} />
        </View>
        <View style={styles.bottomView}>
        <Text style={styles.titleText}> Verify Your Email </Text>
        <Text style={styles.Textnew}>We sent OTP code your email </Text>
          <View style={styles.textInputArea}>
            
            </View>
            <Text style={styles.Textnew}> Confirm New Password </Text>
            <View style={styles.textInputArea}>
            <CustomTextInput
              placeholder="Enter your new password here"
              value={this.state.password}
              setValue={this.setPassword}
              secureTextEntry={true}
            />
          </View>
         

          <View>
          
          <CustomButton 
           title= "Submit"/>
   
        
         
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
    marginTop:40,
    marginLeft:20,
    color:"black"
  },
  Textnew: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop:30,
    marginLeft:30,
    color:"black"
  }
});
