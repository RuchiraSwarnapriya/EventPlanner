import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Colors} from '../../assets/colors';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.loadingOverlay}>
      <ActivityIndicator size={30} color={Colors.black} />
    </View>
  );
};

export default Loader;
