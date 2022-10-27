import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../component/CustomButton';
import {AuthContext} from '../../navigation/AuthProvider';

const HomeScreen = ({navigation, params}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome Home {user.uid}</Text>
      <CustomButton title="LOGOUT" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;
