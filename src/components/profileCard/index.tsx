import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

type Props = {
  name: string;
  email: any;
  imageUri: any;
};

const ProfileCard: React.FC<Props> = props => {
  const {name, email, imageUri} = props;

  const initials = name && name.slice(0, 2).toUpperCase();

  return (
    <View style={styles.mainContainer}>
      {imageUri ? (
        <Image source={{uri: imageUri}} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.initialsContainer]}>
          <Text style={styles.initials}>{initials}</Text>
        </View>
      )}
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
