import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LOGIN_SCREEN,
  PERSONAL_INFO_SCREEN,
  SIGNUP_SCREEN,
  WELCOME_SCREEN,
} from '../../routePaths';

import LoginScreen from '../../../containers/loginScreen';
import SignUpScreen from '../../../containers/signUpScreen';
import WelcomScreen from '../../../containers/welcomeScreen';
import PersonalInfoScreen from '../../../containers/personalInfoScreen';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={WELCOME_SCREEN} component={WelcomScreen} />
      <Stack.Screen
        name={PERSONAL_INFO_SCREEN}
        component={PersonalInfoScreen}
      />
    </Stack.Navigator>
  );
}
