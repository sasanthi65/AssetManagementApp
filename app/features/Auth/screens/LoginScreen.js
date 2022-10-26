import React, {Component, useState, useEffect} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../../../component/CustomTextInput';
import CustomButton from '../../../component/CustomButton';
import {Colors, Images} from '../../../theme';

function LoginApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: true,
      email: '',
      password: '',
    };
  }

  loginUser = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  createUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  componentDidUpdate() {
    // auth()
    //   .createUserWithEmailAndPassword(
    //     'jane.doe@example.com',
    //     'SuperSecretPassword!',
    //   )
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }
    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }
    //     console.error(error);
    //   });
  }

  setEmail = text => this.setState({email: text});

  setPassword = text => this.setState({password: text});

  onLoginPressed = () => {
    console.log(this.state.email);
    // Alert.alert('Wrong password');
    // this.props.navigation.navigate('Home', this.state.email);
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
      <View>
        <LoginApp />
        <Button title="Sign In" onPress={this.loginUser} />
        <Button title="Sign Up" onPress={this.createUser} />
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
      // <View style={styles.container}>
      //   <View style={styles.topView}>
      //     <Image style={styles.image} source={Images.backgrounds.login} />
      //   </View>
      //   <View style={styles.bottomView}>
      //     <View style={styles.textInputArea}>
      //       <CustomTextInput
      //         placeholder="Enter your email address here"
      //         autoCompleteType="email"
      //         keyboardType="email-address"
      //         value={this.state.email}
      //         setValue={this.setEmail}
      //       />
      //       <CustomTextInput
      //         placeholder="Enter your password here"
      //         value={this.state.password}
      //         setValue={this.setPassword}
      //         secureTextEntry={true}
      //       />
      //     </View>
      //     <CustomButton
      //       title="Forgot Password?"
      //       onPress={this.onForgotPassword}
      //       type="TERTIARY"
      //     />
      //     <CustomButton title="LOGIN" onPress={this.onLoginPressed} />
      //     <Text style={styles.text}>Login via</Text>
      //     <TouchableOpacity
      //       style={styles.iconContainer}
      //       onPress={this.onPressGoogle}>
      //       <Image style={styles.icon} source={Images.icons.google} />
      //     </TouchableOpacity>
      //     <Text style={styles.outerText}>
      //       Don't have an account?
      //       <Text style={styles.innerText} onPress={this.onPressSIgnUp}>
      //         {' '}
      //         Sign up
      //       </Text>
      //     </Text>
      //   </View>
      // </View>
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
