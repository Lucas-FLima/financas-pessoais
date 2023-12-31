import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './src/contexts/Auth';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#F0F4FF" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
