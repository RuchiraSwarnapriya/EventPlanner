import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import AngledArrow from '../../../assets/icons/angledArrow.svg';

import styles from './styles';

type Props = {
  buttonText: string;
  onPress: () => void;
};

const TextButton: React.FC<Props> = props => {
  const {buttonText, onPress} = props;
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
      <AngledArrow />
    </TouchableOpacity>
  );
};

export default TextButton;
