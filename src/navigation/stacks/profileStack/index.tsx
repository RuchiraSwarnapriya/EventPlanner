import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../../../containers/profileScreen';
import EditProfileScreen from '../../../containers/editProfileScreen';

import {EDIT_PROFILE_SCREEN, PROFILE_SCREEN} from '../../routePaths';

export default function ProfileStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={PROFILE_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      <Stack.Screen name={EDIT_PROFILE_SCREEN} component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
