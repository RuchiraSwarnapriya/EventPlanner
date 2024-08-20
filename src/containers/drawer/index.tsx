import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import ProfileCard from '../../components/profileCard';
import TextButton from '../../components/buttons/textButton';

import LogoutIcon from '../../assets/icons/logout.svg';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../redux/actions/auth';
import {Colors} from '../../assets/colors';

const HomeDrawer = () => {
  const dispatch: any = useDispatch();
  const userData = useSelector(({user}) => user.userData);
  const userDataLoading = useSelector(({user}) => user.isFetching);

  const version = DeviceInfo.getVersion();

  const onLogout = () => {
    dispatch(logOut());
  };

  return userDataLoading ? (
    <View>
      <ActivityIndicator size={20} color={Colors.lightGrey} />
    </View>
  ) : (
    <View style={styles.mainContainer}>
      <View style={styles.profileContainer}>
        <Image source={{uri: userData.profileImageURL}} style={styles.image} />
        <ProfileCard
          name={userData.firstName + ' ' + userData.lastName}
          email={userData.email}
          noImage={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TextButton
          buttonText="Logout"
          onPress={onLogout}
          icon={<LogoutIcon />}
          reverse={true}
        />
      </View>
      <Text style={styles.versionText}>Version: {version}</Text>
    </View>
  );
};

export default HomeDrawer;
