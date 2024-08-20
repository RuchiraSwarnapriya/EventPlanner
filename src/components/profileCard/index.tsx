import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

type Props = {
  name: string;
  email: any;
  noImage?: boolean;
  imageUri?: any;
};

const ProfileCard: React.FC<Props> = props => {
  const {name, email, imageUri, noImage} = props;

  const initials = name && name.slice(0, 2).toUpperCase();

  return (
    <View style={styles.mainContainer}>
      {!imageUri && !noImage && (
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
