/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MAIN_TABS} from '../../routePaths';

import MainTabs from '../../tabs/mainTabs';

import HomeDrawer from '../../../components/drawer';

export default function AppStack() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={MAIN_TABS}
      screenOptions={{headerShown: false}}
      drawerContent={props => <HomeDrawer {...props} />}>
      <Drawer.Screen name={MAIN_TABS} component={MainTabs} />
    </Drawer.Navigator>
  );
}
