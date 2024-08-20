import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';
import {Colors} from '../../../assets/colors';

type Props = {
  buttonText: string;
  onPress: () => void;
  icon?: any;
  reverse?: boolean;
  disabled?: boolean;
};

const TextButton: React.FC<Props> = props => {
  const {buttonText, onPress, icon, reverse, disabled} = props;
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={onPress}
      disabled={disabled}>
      {reverse ? (
        <>
          {icon}
          <Text style={styles.buttonText}>{buttonText}</Text>
        </>
      ) : (
        <>
          <Text
            style={[
              styles.buttonText,
              {color: disabled ? Colors.lightGrey : Colors.red},
            ]}>
            {buttonText}
          </Text>
          {icon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
