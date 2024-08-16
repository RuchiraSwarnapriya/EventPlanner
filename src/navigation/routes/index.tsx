import React from 'react';

import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from '../stacks/authStack';
import AppStack from '../stacks/appStack';
import InfoStack from '../stacks/infoStack';

import {HOME, INFO} from '../../utils/constants';

export default function MainRoute() {
  const tempAppState = useSelector(({auth}) => auth.tempAppState);

  return (
    <NavigationContainer>
      {tempAppState === HOME ? (
        <AppStack />
      ) : tempAppState === INFO ? (
        <InfoStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
