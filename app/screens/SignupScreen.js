import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View,Button} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';
import {Images} from '../theme';
<<<<<<< HEAD



export default class ResetPassword extends Component {
=======
import { SignUp } from './SignUp';
import firebase from '../../firebase';

export default class SignUpScreen extends Component {
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df
  constructor() {
    super();
    this.state = {
      isFocused: true,
      name:'',
      email: '',
      password: '',
<<<<<<< HEAD
      cpassword:''
=======
      cpassword: '',
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df
    };
  }
  setName = text => this.setState({name: text});
  setEmail = text => this.setState({email: text});
  setPassword = text => this.setState({password: text});
  setCPassword = text => this.setState({cpassword: text});
<<<<<<< HEAD
=======

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
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df

  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <View style={styles.topView}>
        
          
       
        <Text style={styles.titleText}>Sign up for a {'\n'}new account </Text>
        <Text style={styles.Textnew}> We just need some more information. </Text>
        <Text style={styles.Textinfo}>Name </Text>
          

=======
       
        <Text style={styles.TitleText}> SignUp for a new account</Text>
        <Text style={styles.Text}> texttexttexttexttexttexttexttexttexttexttexttexttexttext</Text>
        
        
        <View style={styles.bottomView}>
          <View style={styles.textInputArea}>
          <CustomTextInput
              placeholder="Enter your Name here"
              value={this.state.name}
              setValue={this.setName}
            />
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df
            <CustomTextInput
            style={styles.textInputArea}
              placeholder="Enter your Name here"
              value={this.state.name}
              setValue={this.setName}
            />
            
           
            
            <Text style={styles.Textinfo}>Email </Text>
            <CustomTextInput
            style={styles.textInputArea}
              placeholder="Enter your new Email here"
              value={this.state.email}
              setValue={this.setEmail}
              
            />
            <Text style={styles.Textinfo}>Password </Text>
            <CustomTextInput
            style={styles.textInputArea}
              placeholder="Enter your  Password here"
              value={this.state.password}
              setValue={this.setPassword}
              secureTextEntry={true}
              
            />
           <Text style={styles.Textinfo}>Confirm Password </Text>
            <CustomTextInput
<<<<<<< HEAD
            style={styles.textInputArea}
              placeholder="Confirm your  Password here"
              value={this.state.password}
              setValue={this.setPassword}
=======
              placeholder="Confirm your password here"
              value={this.state.cpassword}
              setValue={this.setCPassword}
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df
              secureTextEntry={true}
              
            />
         

          <View>
          
          <CustomButton 
           title= "Submit"/>
   
        
         
          </View>
<<<<<<< HEAD
=======
          <CustomButton title="submit" onPress={()=>{this.signupfirebase}}/>
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
 
=======
    TitleText: {
 
        textAlign:'center',
        fontSize: 30,
        fontWeight: "bold",
        color:"black",
        backgroundColor: 'white'
      
      },
>>>>>>> 4273a61691c30f8f9558703330b056e6440b22df
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
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop:40,
    marginLeft:20,
    color:"black"
  },
  Textnew: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop:10,
    marginLeft:20,
    color:"gray"
  },
  Textinfo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:25,
    marginLeft:25,
    color:"black"
  }
});
