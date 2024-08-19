import React from 'react';
import {View} from 'react-native';

import ProfileCard from '../../components/profileCard';
import TextButton from '../../components/buttons/textButton';

import LogoutIcon from '../../assets/icons/logout.svg';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../redux/actions/auth';

const HomeDrawer = () => {
  const dispatch: any = useDispatch();
  const userData = useSelector(({user}) => user.userData);
  const profileImageURL = useSelector(({user}) => user.userImageData);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <View>
      <ProfileCard
        name={userData.firstName + userData.lastName}
        email={userData.email}
        imageUri={profileImageURL}
      />
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
