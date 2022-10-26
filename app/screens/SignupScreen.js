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
      name:'',
      email: '',
      password: '',
      cpassword:''
    };
  }
  setName = text => this.setState({name: text});
  setEmail = text => this.setState({email: text});
  setPassword = text => this.setState({password: text});
  setCPassword = text => this.setState({cpassword: text});

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
        
          
       
        <Text style={styles.titleText}>Sign up for a {'\n'}new account </Text>
        <Text style={styles.Textnew}> We just need some more information. </Text>
        <Text style={styles.Textinfo}>Name </Text>
          

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
            style={styles.textInputArea}
              placeholder="Confirm your  Password here"
              value={this.state.password}
              setValue={this.setPassword}
              secureTextEntry={true}
              
            />
         

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
