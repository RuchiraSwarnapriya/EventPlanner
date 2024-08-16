/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME_STACK, PROFILE_SCREEN} from '../../routePaths';

import ProfileScreen from '../../../containers/profileScreen';

import HomeStack from '../../stacks/homeStack';

import {Colors} from '../../../assets/colors';

import HomeIcon from '../../../assets/icons/home.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';

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
        name={PROFILE_SCREEN}
        component={ProfileScreen}
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
