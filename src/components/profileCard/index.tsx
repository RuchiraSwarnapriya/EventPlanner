import React from 'react';
import {View, Text, Image} from 'react-native';

import {getRandomColor} from '../../utils/commons';

import styles from './styles';

type Props = {
  name: string;
  email: any;
  imageUri: any;
};

const ProfileCard: React.FC<Props> = props => {
  const {name, email, imageUri} = props;

  const initials = name.slice(0, 2).toUpperCase();

  const randomColor = getRandomColor();

  return (
    <View style={styles.mainContainer}>
      {imageUri ? (
        <Image source={{uri: imageUri}} style={styles.image} />
      ) : (
        <View
          style={[
            styles.image,
            {backgroundColor: randomColor},
            styles.initialsContainer,
          ]}>
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
