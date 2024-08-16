/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {EDIT_PROFILE_SCREEN, HOME_STACK, PROFILE_STACK} from '../../routePaths';

import HomeStack from '../../stacks/homeStack';
import ProfileStack from '../../stacks/profileStack';

import {Colors} from '../../../assets/colors';

import HomeIcon from '../../../assets/icons/home.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';

export default function MainTabs() {
  const Tab = createBottomTabNavigator();
  const [hide, setHide] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
          display: hide ? 'none' : 'flex',
        },
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
        listeners={({route}) => ({
          state: () => {
            const subRoute = getFocusedRouteNameFromRoute(route);
            setHide(subRoute === EDIT_PROFILE_SCREEN);
          },
        })}
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
