import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';

type Props = {
  buttonText: string;
  onPress: () => void;
  icon?: any;
  reverse?: boolean;
};

const TextButton: React.FC<Props> = props => {
  const {buttonText, onPress, icon, reverse} = props;
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      {reverse ? (
        <>
          {icon}
          <Text style={styles.buttonText}>{buttonText}</Text>
        </>
      ) : (
        <>
          <Text style={styles.buttonText}>{buttonText}</Text>
          {icon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
