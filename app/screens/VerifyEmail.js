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
      OTP: '',
      
    };
  }

  setOTP = text => this.setState({OTP: Number});

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
        
          <Image style={styles.image} source={Images.backgrounds.verify} />
        </View>
        <View style={styles.bottomView}>
        <Text style={styles.titleText}> Verify Your Email </Text>
        <Text style={styles.Textnew}>We sent OTP code your email </Text>
          <View style={styles.textInputArea}>
            
            </View>
            <Text style={styles.Textotp}> Please type the OTP as shared on your email address 
  joneee12@gmail.com</Text>

            <View style={styles.textInputArea}>
            <CustomTextInput
              placeholder="Enter your OTP here"
              value={this.state.OTP}
              setValue={this.setOTP}
              
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
    marginTop:10,
    marginLeft:30,
    color:"gray"
  },
  Textotp:{
    fontSize: 14,
    fontWeight: "bold",
    marginTop:30,
    marginLeft:30,
    color:"black"
  },
});
