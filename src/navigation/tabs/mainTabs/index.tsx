/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_STACK, PROFILE_STACK} from '../../routePaths';

import HomeStack from '../../stacks/homeStack';

import {Colors} from '../../../assets/colors';

import HomeIcon from '../../../assets/icons/home.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import ProfileStack from '../../stacks/profileStack';

export default function MainTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: Colors.black},
      }}>
      <Tab.Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: () => {
            return <HomeIcon />;
          },
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarIcon: () => {
            return <ProfileIcon />;
          },
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
