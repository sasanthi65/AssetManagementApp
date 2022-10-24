import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#190662',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 5,
    margin: 30,
    marginTop: 15,
  },
  textInput: {},
});
