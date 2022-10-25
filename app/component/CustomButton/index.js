import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme';

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {onPress, title, type = 'PRIMARY'} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  container_PRIMARY: {
    backgroundColor: Colors.Button.PRIMARY_COLOR,
    margin: 30,
    marginTop: 10,
    padding: 15,
  },
  container_TERTIARY: {
    margin: 10,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text_PRIMARY: {
    color: Colors.Text.SECONDARY_COLOR,
    fontSize: 20,
    letterSpacing: 5,
  },
  text_TERTIARY: {
    color: Colors.Text.TERTIARY_COLOR,
    alignSelf: 'flex-end',
    fontWeight: '400',
  },
});
