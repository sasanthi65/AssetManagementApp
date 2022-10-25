import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {value, setValue, placeholder, secureTextEntry} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 5,
    margin: 30,
    marginTop: 15,
  },
  textInput: {},
});
