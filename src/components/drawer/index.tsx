import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {PROFILE_SCREEN} from '../../navigation/routePaths';

const HomeDrawer = (props: {navigation: any}) => {
  const {navigation} = props;
  const onNvaigateProfile = () => {
    navigation.navigate(PROFILE_SCREEN);
  };
  return (
    <View>
      <TouchableOpacity onPress={onNvaigateProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeDrawer;
