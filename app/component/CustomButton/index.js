import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, type = 'PRIMARY'} = this.props;
    return (
      <TouchableOpacity
       
        style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 35,
    paddingHorizontal: 20,
    margin: 0,
    marginTop: 55,
  },
  container_PRIMARY: {
    backgroundColor: '#190662',
  },
  container_TERTIARY: {
    opacity: '63%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text_PRIMARY: {
    color: 'white',
    fontSize: 20,
  },
  text_TERTIARY: {
    color: 'black',
    alignSelf: 'flex-end',
    fontWeight: '400',
  },
});
