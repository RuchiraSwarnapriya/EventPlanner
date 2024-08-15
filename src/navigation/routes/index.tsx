import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from '../stacks/authStack';
import AppStack from '../stacks/appStack';

export default function MainRoute() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
