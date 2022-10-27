import React, {Component} from 'react';
import {AuthProvider} from './navigation/AuthProvider';
import Router from './Router';

const Provider = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default Provider;
