import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View,Button} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';
import {Images} from '../theme';



export default class OTPValidate extends Component {
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
          <View style={styles.textInputArea}>
          <Text style={styles.TitleText}>Email Validation</Text>
            <CustomTextInput
              placeholder="Enter your email address here"
              value={this.state.email}
              setValue={this.setEmail}
            />
           
          </View>
          <CustomButton />

          <View>
          
          <CustomButton 
           title= "Signup"/>
   
        
         
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
});
