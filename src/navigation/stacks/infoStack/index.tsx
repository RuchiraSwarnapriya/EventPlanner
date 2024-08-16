import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PERSONAL_INFO_SCREEN, WELCOME_SCREEN} from '../../routePaths';

import WelcomScreen from '../../../containers/welcomeScreen';
import PersonalInfoScreen from '../../../containers/personalInfoScreen';

export default function InfoStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={WELCOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={WELCOME_SCREEN} component={WelcomScreen} />
      <Stack.Screen
        name={PERSONAL_INFO_SCREEN}
        component={PersonalInfoScreen}
      />
    </Stack.Navigator>
  );
}
