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
      ...props
    } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={setValue}
          autoCompleteType={autoCompleteType}
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          {...props}
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
    marginVertical: 5,
    margin: 30,
    marginTop: 15,
  },
  textInput: {
    fontSize: 16,
  },
});
