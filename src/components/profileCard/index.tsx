import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

type Props = {
  name?: string;
  email?: any;
  imageUri?: any;
};

const ProfileCard: React.FC<Props> = props => {
  const {name, email, imageUri} = props;
  return (
    <View style={styles.mainContainer}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
