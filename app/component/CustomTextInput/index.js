import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Colors} from '../../theme';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      value,
      setValue,
      placeholder,
      secureTextEntry,
      autoCompleteType,
      keyboardType,
    } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          autoCompleteType={autoCompleteType}
          keyboardType={keyboardType}
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
    backgroundColor: Colors.TextField.BACKGROUND_PRIMARY_COLOR,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 1,
    margin: 30,
    marginTop: 10,
  },
  textInput: {
    fontSize: 16,
  },
});
