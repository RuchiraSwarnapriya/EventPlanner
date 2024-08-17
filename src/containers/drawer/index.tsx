import React from 'react';
import {View} from 'react-native';

import ProfileCard from '../../components/profileCard';
import TextButton from '../../components/buttons/textButton';

import LogoutIcon from '../../assets/icons/logout.svg';

import styles from './styles';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/auth';

const HomeDrawer = () => {
  const dispatch: any = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    console.log('Logout');
  };

  return (
    <View>
      <ProfileCard />
      <View style={styles.buttonContainer}>
        <TextButton
          buttonText="Logout"
          onPress={onLogout}
          icon={<LogoutIcon />}
          reverse={true}
        />
      </View>
    </View>
  );
};

export default HomeDrawer;
