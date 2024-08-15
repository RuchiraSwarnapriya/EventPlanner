import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from '../stacks/authStack';
import AppStack from '../stacks/appStack';

export default function MainRoute() {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
