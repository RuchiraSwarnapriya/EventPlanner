import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LOGIN_SCREEN, SIGNUP_SCREEN} from '../../routePaths';

import LoginScreen from '../../../containers/loginScreen';
import SignUpScreen from '../../../containers/signUpScreen';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
