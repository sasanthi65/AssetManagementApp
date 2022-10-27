import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './navigation/AuthProvider';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';

const Router = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Router;
