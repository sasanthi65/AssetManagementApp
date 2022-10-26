import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';
import {Images} from '../theme';
import { SignUp } from './SignUp';
import firebase from '../../firebase';

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: true,
      name:'',
      email: '',
      password: '',
      cpassword: '',
    };
  }
  setName = text => this.setState({name: text});
  setEmail = text => this.setState({email: text});
  setPassword = text => this.setState({password: text});
  setCPassword = text => this.setState({cpassword: text});

  signupfirebase = ()=>{
    SignUp(this.state.email,this.state.password).
    then((res)=>{
      alert(success);
      console.log('res',res);
      var userid=firebase.auth

    }).
    catch((err)=>{
      alert(err);
      console.log('err',err);
    }
    )

  }

  render() {
    return (
      <View style={styles.container}>
       
        <Text style={styles.TitleText}> SignUp for a new account</Text>
        <Text style={styles.Text}> texttexttexttexttexttexttexttexttexttexttexttexttexttext</Text>
        
        
        <View style={styles.bottomView}>
          <View style={styles.textInputArea}>
          <CustomTextInput
              placeholder="Enter your Name here"
              value={this.state.name}
              setValue={this.setName}
            />
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
            <CustomTextInput
              placeholder="Confirm your password here"
              value={this.state.cpassword}
              setValue={this.setCPassword}
              secureTextEntry={true}
            />
          </View>
          <CustomButton title="submit" onPress={()=>{this.signupfirebase}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    TitleText: {
 
        textAlign:'center',
        fontSize: 30,
        fontWeight: "bold",
        color:"black",
        backgroundColor: 'white'
      
      },
  container: {
    flex: 1,
    backgroundColor: '#EAE9E9',
  },
 

  bottomView: {
    flex: 2,
    backgroundColor: 'white',

  },
  textInputArea: {
    marginTop: 30,
  },
  Text: {
    textAlign: 'center',
  },
});
