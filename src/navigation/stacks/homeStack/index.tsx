import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../../containers/homeScreen';
import PostsScreen from '../../../containers/postsScreen';
import {HOME_SCREEN, POSTS_SCREEN} from '../../routePaths';

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={POSTS_SCREEN}
        component={PostsScreen}
        options={{
          title: 'Posts',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
