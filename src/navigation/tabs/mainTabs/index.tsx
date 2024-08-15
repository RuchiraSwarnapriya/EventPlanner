import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_STACK, PROFILE_SCREEN} from '../../routePaths';

import ProfileScreen from '../../../containers/profileScreen';
import HomeStack from '../../stacks/homeStack';

export default function MainTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={HOME_STACK} component={HomeStack} />
      <Tab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
