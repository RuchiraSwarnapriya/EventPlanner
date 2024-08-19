/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthStack from '../stacks/authStack';
import AppStack from '../stacks/appStack';
import InfoStack from '../stacks/infoStack';

import {setAppState} from '../../redux/actions/auth';

import {AUTH, HOME, INFO} from '../../utils/constants';

import {Colors} from '../../assets/colors';

import styles from './styles';

export default function MainRoute() {
  const dispatch: any = useDispatch();
  const tempAppState = useSelector(({authorizer}) => authorizer.tempAppState);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (userData: any) => {
    setUser(userData);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return (
      <View style={styles.initContianer}>
        <ActivityIndicator size={20} color={Colors.lightGrey} />
      </View>
    );
  }

  if (!user) {
    dispatch(setAppState(AUTH));
  }

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
