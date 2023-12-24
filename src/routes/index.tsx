import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

import AuthRoutes from './auth.routes';

export default function Routes() {
  const loading = false;
  const signed = false;
  return signed ? <View>Logado</View> : <AuthRoutes />;
}
