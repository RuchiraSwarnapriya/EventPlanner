import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ProfileCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={{uri: ''}} style={styles.image} />
      <View>
        <Text style={styles.name}>name</Text>
        <Text style={styles.email}>email</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
